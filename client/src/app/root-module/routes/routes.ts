import { Routes } from '@angular/router';


export const ROUTES: Routes = [
  {
    path: '' , loadChildren: ()=> import('../../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profil', loadChildren: ()=> import('../../features/user/user.module')
    .then(m => m.UserModule)
  },
  {
    path: 'page-menu', loadChildren: ()=> import('../../features/carte-panier/carte-panier.module')
    .then(m => m.CartePanierModule)
  },
  {
    path: 'admin', loadChildren: () => import('../../features/admin/admin.module')
    .then(m => m.AdminModule)
  },
  {
    path: '**', redirectTo: ''
  }
];
