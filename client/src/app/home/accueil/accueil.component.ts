import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart';
import { JwtToken } from 'src/app/shared/models/jwt-token';
import { Response } from 'src/app/shared/models/response.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit, OnDestroy {
  public nbrOfItem: number;
  public isAuth = false;
  public userName: string
  private subscription = new Subscription();
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(!this.userName){
      this.subscription.add(this.userService.currentUser$.subscribe((user: any)=>{
        if(user){
          this.userName = user.firstname
        }
      }))
    }
    this.subscription.add(this.userService.jwtToken$.subscribe((jwtToken: JwtToken) =>{
      this.isAuth = jwtToken.isAuth;
    }));
    this.subscription.add(this.userService.getCurrentUser().subscribe((response: Response) =>{
      if(response.status === 200){
        this.userName = response.result.firstname;
        this.subscription.add(this.userService.currentUser$.subscribe((user: any)=>{
          this.userName = user.firstname
        }))
      }
    }))
    this.subscription.add(
      this.cartService.cart$.subscribe((cart: Cart) => {
        if (cart) {
          this.nbrOfItem = cart.nbrOfItem;
        } else {
          this.cartService.emitCart();
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
