import { NgModule } from '@angular/core';


import { CarteMenuComponent } from 'src/app/features/carte-panier/carte-menu/carte-menu.component';
import { PanierComponent } from 'src/app/features/carte-panier/panier/panier.component';
import { PaypalComponent } from 'src/app/features/carte-panier/paypal/paypal.component';
import { SuccessComponent } from 'src/app/features/carte-panier/success/success.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { RouterModule } from '@angular/router';
import { CARTE_PANIER_ROUTES } from './carte-panier.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarteComponent } from './carte-menu/carte/carte.component';




@NgModule({
  declarations: [
    CarteMenuComponent,
    PanierComponent,
    PaypalComponent,
    SuccessComponent,
    CarteComponent
  ],
  imports: [
    NgxPayPalModule,
    RouterModule.forChild(CARTE_PANIER_ROUTES),
    SharedModule,
  ]
})
export class CartePanierModule { }
