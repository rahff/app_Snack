import { NgModule } from '@angular/core';

import { ProfilComponent } from 'src/app/features/user/profil/profil.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { USER_ROUTES } from './user.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListCommandeUserComponent } from './list-commande-user/list-commande-user.component';




@NgModule({
  declarations: [
    ProfilComponent,
    ListCommandeUserComponent,
  ],
  imports: [
    RouterModule.forChild(USER_ROUTES),
    SharedModule
  ]
})
export class UserModule { }
