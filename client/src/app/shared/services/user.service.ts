import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtToken } from '../models/jwt-token';
import { Response } from '../models/response.model';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private api = environment.API;
  public subscription: Subscription = new Subscription();
  public currentUser$:BehaviorSubject<User> = new BehaviorSubject(null);
  public jwtToken$: BehaviorSubject<JwtToken> = new BehaviorSubject({token: null, isAuth: null});
  constructor(private http: HttpClient) {
       this.subscription = this.http.get<Response>(this.api + `users/verif-token`).subscribe((response)=>{
        if(response.status === 200){
          this.jwtToken$.next({
            token: response.token,
            isAuth: true
          })
          const user: User = {
            email: response.user.local.email,
            name: response.user.name,
            adress: response.user.adress,
            firstname: response.user.firstname,
            role: response.user.role,
            confirm: response.user.confirm,
            _id:  response.user._id,
            commandes: response.user.commandes 
          }
          this.currentUser$.next(user)
          localStorage.setItem('token', response.token);
          this.subscription.unsubscribe();
        }else{
          this.jwtToken$.next({
            token: null,
            isAuth:false
          })
          localStorage.removeItem('token');
          this.subscription.unsubscribe();
        }
      })
  }
  signup(body: User): Promise<string | number> {
    return new Promise((resolve, reject) => {
      this.http.post(this.api + 'users/new', body).subscribe(
        (response: Response) => {
          if (response.status === 200) {
            const bodyLogin = { email: body.email, password: body.password };
            this.login(bodyLogin).then((res)=>{
              console.log('isLoggedIn');
            });
            resolve(response.message);
          } else {
            reject(response.error);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
  login(body: { email: string; password: string }): Promise<string | boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(this.api + 'users/connection', body).subscribe(
        (response: Response) => {
          if (response.status === 200) {
           this.jwtToken$.next({
             token: response.token,
             isAuth: true
           })
           if(response.user){
             const user: User = {
               email: response.user.local.email,
               name: response.user.name,
               adress: response.user.adress,
               firstname: response.user.firstname,
               role: response.user.role,
               confirm: response.user.confirm,
               _id:  response.user._id,
               commandes: response.user.commandes 
             }
             this.currentUser$.next(user);
             localStorage.setItem('user', JSON.stringify(user));
           }
           localStorage.setItem('token', response.token);
            resolve(true);
          } else if (response.status === 404) {
            console.log('resolve 404');
            reject("L'email est incorrect");
          } else if (response.status === 401) {
            console.log('resolve 401');
            reject('Le mot de passe est incorrect');
          }
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
  confirmAccount(id: string): Observable<boolean>{
    return this.http.get<Response>(this.api + `users/confirm/${id}`).pipe(
      map((response)=>{
        if(response.status === 200){
          return true;
        }else{
          return false;
        }
      })
    )
  }
  verifEmail(email: string): Promise<boolean | string> {
    return new Promise((resolve, reject) => {
      this.http.post(this.api + 'users/verif-email', email).subscribe(
        (response: Response) => {
          if (response.status === 200) {
            resolve(true);
          } else {
            reject('Il y a déjà un compte avec cet e-mail');
          }
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
 
  saveUserInfos(): void {
    localStorage.removeItem('userInfos');
   
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('cart');
    this.subscription.unsubscribe();
    this.jwtToken$.next({
      isAuth: false,
      token: null
    })
    this.currentUser$.next(null)
  }
  updateOneField(id: string, fieldName: string, body: any): Promise<Response | string> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.api + 'users/update/' + `${fieldName}` + '/' + id, body)
        .subscribe((response: Response) => {
          if (response.status === 200) {
            if (response.message) {
              if (response.status === 200) {
              
                this.saveUserInfos();
                resolve(response);
                return;
              } else if (response.status === 403) {
                reject(response.message);
                return;
              }
            }
            
            this.saveUserInfos();
            resolve(response);
          } else {
            reject(response.message);
            console.log(response);
          }
        });
    });
  }
  getCurrentUser(): Observable<any> {
    if(this.currentUser$.value){
      return of(this.currentUser$.value);
    }else{
      return this.http.get<Response>(this.api + "users/infos-user").pipe(
        tap((response: Response) =>{
          if(response.status === 200){
            const email = response.result.local.email
            delete response.result.local
            const user: User = {
                email: email,
                _id: response.result._id,
                confirm: response.result.confirm,
                adress: response.result.adress,
                firstname: response.result.firstname,
                name: response.result.name,
                role: response.result.role,
                commandes: response.result.commandes    
            }
            this.currentUser$.next(user);
          }else{
            this.currentUser$.next(null);
          }
        })
      )

    }
  }
}
