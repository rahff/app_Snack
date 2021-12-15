import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService){}
  canActivate(): boolean {
   if(this.userService.jwtToken$.value.isAuth && this.userService.currentUser$.value.role === 1){
    return true;
   }else{
     return false;
   }

  }
}
