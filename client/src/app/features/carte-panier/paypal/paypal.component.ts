import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

import { CartService } from 'src/app/shared/services/cart.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css'],
})
export class PaypalComponent implements OnInit {
  @Input() public totalCommande;
  public paypalConfig: IPayPalConfig;
  private idPaypal = environment.PAYPAL_ID_CLIENT;
  private currency = environment.CURRENCY;
  private userInfos;
  @Output() private loading: EventEmitter<boolean> = new EventEmitter()
  private detail: any[] = [];
  constructor(private cartService: CartService,
              private router: Router,
              private userService: UserService,
              private orderService: OrderService) {}

  ngOnInit(): void {
      this.userService.currentUser$.subscribe((user: any) =>{
      this.userInfos = user;
    });
  
    
    this.initConfig();
  }

  initConfig(): void {
    const currency = this.currency;
    const clientId = this.idPaypal;
    const price = this.totalCommande;
    this.paypalConfig = {
      currency,
      clientId,
      createOrderOnClient: (data) =>
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: currency,
                value: price,
                breakdown: {
                  item_total: {
                    currency_code: currency,
                    value: price,
                  },
                },
              },
              items: [
                {
                  name: 'Snack Tacos',
                  quantity: '1',
                  category: 'PHYSICAL_GOODS',
                  unit_amount: {
                    currency_code: currency,
                    value: price,
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'buynow',
        layout: 'vertical',
        size:'responsive'
      },
      onApprove: (data, actions) => {
     
        this.loading.emit(true);
        for (let item of this.cartService.cart.items) {
          const obj = {product: item.product.name, quantity: item.quantity, cost: (item.cost / 100)};
          this.detail.push(obj);
        }
        

        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
        // create order//
        if (data.status === 'COMPLETED'){
          const numeroCommande = data.id;
          const order = {detail: this.detail, user: this.userInfos, montant: +price, numero: numeroCommande, date: new Date()};
          this.orderService.createOrder(order).then((ok: boolean) => {
            console.log(("inthen createOrder"));
              this.cartService.reinitCart();
              this.router.navigate(['/page-menu/commande-success']);
          }).catch((err) => {
            console.log("inCatchCreateOrder");
            
              console.log(err);
              this.loading.emit(false);
          });
        }
       
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.loading.emit(false);
      },
      onError: (err) => {
        console.log('OnError', err);
        this.loading.emit(false);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
