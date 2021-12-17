import { NgModule } from '@angular/core';

import { AccueilComponent } from './accueil/accueil.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AccueilComponent,
    CarouselComponent,
    LoginComponent,
    SignupComponent,
    CertificationsComponent,
    ContactComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(HOME_ROUTES)
  ]
})
export class HomeModule { }
