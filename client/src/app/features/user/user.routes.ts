import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/auth.guard';
import { ListCommandeUserComponent } from './list-commande-user/list-commande-user.component';

import { ProfilComponent } from './profil/profil.component';


export const USER_ROUTES: Routes = [
      {
        path: '',  canActivate: [AuthGuard], component: ProfilComponent
      },
      {
        path: 'list-commande', component: ListCommandeUserComponent
      }
];
