import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Commande } from 'src/app/shared/models/commande';
import { CartService } from 'src/app/shared/services/cart.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list-commande-user',
  templateUrl: './list-commande-user.component.html',
  styleUrls: ['./list-commande-user.component.css'],
})
export class ListCommandeUserComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService,
              private cartService: CartService,
              private router: Router) {}

  private subscription: Subscription;;
  public commandes:{detail:any,date: Date, montant: number, numeroCommande: string}[] = [];
  ngOnInit(): void {
   this.subscription =  this.userService.getCurrentUser().subscribe((userInfos: any) => {
      console.log(userInfos);
      this.commandes = userInfos.commandes
    });
    console.log(this.commandes);
  }
  refreshCommande(index: number): void {
    this.cartService.refreshCommande(this.commandes[index].detail);
    this.router.navigate(['/page-menu/panier']);
  }
  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
