import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const HOME_ROUTES: Routes = [
    {
        path: '', component: AccueilComponent 
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'certification', component: CertificationsComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    }
];
