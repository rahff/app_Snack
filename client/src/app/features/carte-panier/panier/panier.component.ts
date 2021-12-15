import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart';
import { JwtToken } from 'src/app/shared/models/jwt-token';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit, OnDestroy {

  public isLoading: boolean;
  public color = 'green'
  private subcription: Subscription = new Subscription();
  public cart: Cart;
  constructor(private cartService: CartService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.subcription.add(this.userService.jwtToken$.subscribe((jwtToken: JwtToken)=>{
      if(jwtToken.isAuth){
        return;
      }else{
        this.router.navigate(['/login']);
      }
    }))
   this.subcription.add(this.cartService.cart$.subscribe((cart: Cart)=>{
      this.cart = cart;
    }));
  }
  deleteItem(product: Product){
    this.cartService.removeItem(product);
    console.log(this.cart);
    console.log(this.cartService.cart);
    
  }
  onLoad(event: boolean){
    this.isLoading = event;
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
