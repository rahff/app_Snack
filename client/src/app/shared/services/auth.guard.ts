import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService) {}
  canActivate(): boolean {
    if (this.userService.jwtToken$.value.isAuth) {
      return true;
    } else {
      return false;
    }
  }
  
}