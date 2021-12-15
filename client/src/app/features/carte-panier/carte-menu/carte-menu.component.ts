import { Component, DoCheck, OnChanges, OnDestroy, OnInit,Output  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-carte-menu',
  templateUrl: './carte-menu.component.html',
  styleUrls: ['./carte-menu.component.css'],
})
export class CarteMenuComponent implements OnInit, OnDestroy {

  public nbrOfItem: number;
  private subscription: Subscription = new Subscription();
  public productList: Product[];
  public itemList: Product[];
  param: string;
  constructor(private cartService: CartService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) {}

         
  ngOnInit(): void {
    console.log('init carte-menu');
    
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.param = param.get('product');
      })
    this.subscription.add(this.cartService.cart$.subscribe((cart: Cart)=>{
      if(cart){
        this.nbrOfItem = cart.nbrOfItem;
      }else{
        this.cartService.emitCart();
      }
    }));
    this.subscription.add(this.productService.product$.subscribe((products: Product[]) => {
      if (!products){
        this.productService.getProductList();
      }else{
        this.productList = products;
        this.itemList = this.productList.filter(p => p.category === +this.param);
      }
    }));
    
  }
  changeProductList(index: number): void {
    console.log(this.param);
    this.itemList = this.productList.filter(p => p.category === index);
    console.log(this.itemList);
    
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}

