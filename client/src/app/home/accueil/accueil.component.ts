import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart';
import { JwtToken } from 'src/app/shared/models/jwt-token';
import { AlertService } from 'src/app/shared/services/alert.service';
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
    private currentRoute: ActivatedRoute,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    console.log(this.currentRoute.snapshot.queryParamMap.get("userId"));
    
    if(this.currentRoute.snapshot.queryParamMap.get("userId")){
      this.subscription.add(this.userService.confirmAccount(this.currentRoute.snapshot.queryParamMap.get("userId")).subscribe((response: boolean)=>{
        if(response){
          this.alertService.makeSimpleAlert('Votre compte est validé !', "success", 2000)
        }else{
          this.alertService.makeSimpleAlert('Une erreur c\'est produite ...', "error", 2000)
        }
      }))
    }
      this.subscription.add(this.userService.currentUser$.subscribe((user: any)=>{
        if(user){
          this.userName = user.firstname      
        }
      }))
    this.subscription.add(this.userService.jwtToken$.subscribe((jwtToken: JwtToken) =>{
      this.isAuth = jwtToken.isAuth;
    }));
 
    this.subscription.add(
      this.cartService.cart$.subscribe((cart: Cart) => {
        if (cart) {
          this.nbrOfItem = cart.nbrOfItem;
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
