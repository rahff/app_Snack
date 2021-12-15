import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from '../models/cart';
import { JwtToken } from '../models/jwt-token';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menu-mobile', [
      state(
        'close',
        style({
          height: '0px',
          padding: '0px',
        })
      ),
      state(
        'open',
        style({
          height: '180px',
          padding: '20px',
        })
      ),
      transition('close => open', animate(800)),
      transition('open => close', animate(200)),
    ]),

    trigger('list', [
      state(
        'none',
        style({
          display: 'none',
        })
      ),
      state(
        'flex',
        style({
          display: 'block',
        })
      ),
      transition('none=>flex', animate(1000)),
    ]),
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public state = 'close';
  public state2 = 'none';
  constructor(private userService: UserService) {}
  public openMenu = false;
  public isAuth = false;
  private subcription: Subscription;
  ngOnInit(): void {
    window.addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeMenu();
    });
    this.subcription = this.userService.jwtToken$.subscribe((jwtToken: JwtToken) =>{
      this.isAuth = jwtToken.isAuth
    })
  }
  closeMenu(): void {
    if (this.state === 'open') {
      this.state = 'close';
      this.state2 = 'none';
      this.openMenu = false;
    } else {
      return;
    }
  }

  toggleMenu($event: Event): void {
    $event.stopPropagation();
    this.openMenu = !this.openMenu;
    if (this.state === 'close' && this.state2 === 'none') {
      this.state = 'open';
      this.state2 = 'flex';
    } else if (this.state === 'open' && this.state2 === 'flex') {
      this.state = 'close';
      this.state2 = 'none';
    }
  }
  logout(): void{
    this.userService.logout();
    
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
