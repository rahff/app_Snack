import { Routes } from '@angular/router';

import { CarteMenuComponent } from './carte-menu/carte-menu.component';
import { PanierComponent } from './panier/panier.component';
import { SuccessComponent } from './success/success.component';

export const CARTE_PANIER_ROUTES: Routes = [
  {
    path: '',
   redirectTo:'carte/1'
  },
  {
    path: 'carte/:product',
    component: CarteMenuComponent,
  },

  {
    path: 'panier',
    component: PanierComponent,
  },
  {
    path: 'commande-success',
    component: SuccessComponent,
  },
];
