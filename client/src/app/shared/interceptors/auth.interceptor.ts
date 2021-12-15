import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   const token = localStorage.getItem('token');
   if(token){
     const req = request.clone({
       headers: request.headers.set('authorization', token)
     });
     return next.handle(req);
   }else{
     return next.handle(request);
   }
  }
}
