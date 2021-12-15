import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, Subscription, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
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
  public currentUser$:BehaviorSubject<any> = new BehaviorSubject(null);
  public jwtToken$: BehaviorSubject<JwtToken> = new BehaviorSubject({token: null, isAuth: null});
  constructor(private http: HttpClient) {
    this.initToken();
    this.subscription.add(this.initTimer().subscribe(()=>{},(err)=>{
      this.jwtToken$.next({
        isAuth: false,
        token: null
      });
      localStorage.removeItem('token');
      this.subscription.unsubscribe();
      console.log('unsubscribe timer');
    }))
    this.subscription.add(this.getCurrentUser().subscribe());
  }
  initToken(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.jwtToken$.next({
        token: token,
        isAuth: true
      })
    }
  }
  initTimer(){
    return timer(2000, 1000*60*5).pipe(
      switchMap(()=>{
        if(localStorage.getItem('token')){
          return this.http.get<Response>(this.api + 'users/verif-token').pipe(
            tap((response: Response) =>{
            if(response.status === 200){
              this.jwtToken$.next({
                token: response.token,
                isAuth: true
              })
              localStorage.setItem('token', response.token);
            }else{
              this.jwtToken$.next({
                token: null,
                isAuth:false
              })
              localStorage.removeItem('token');
              this.subscription.unsubscribe();
            }
            })
          )
        }else{
          return of(null);
        }
      })
    )
  }
  signup(body: User): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.post(this.api + 'users/new', body).subscribe(
        (response: Response) => {
          if (response.status === 200) {
            const bodyLogin = { email: body.email, password: body.password };
            this.login(bodyLogin);
            resolve(response.message);
          } else {
            reject(response.message);
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
           localStorage.setItem('token', response.token);
           this.initTimer().subscribe(()=>{},(err)=>{
            this.jwtToken$.next({
              isAuth: false,
              token: null
            });
            localStorage.removeItem('token');
            this.subscription.unsubscribe();
            console.log('unsubscribe timer');
            
          })
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
      return this.currentUser$;
    }else{
      return this.http.get<Response>(this.api + "users/infos-user").pipe(
        tap((response: Response) =>{
          if(response.status === 200){
            this.currentUser$.next(response.result);
          }else{
            this.currentUser$.next(null);
          }
        })
      )

    }
  }
}
