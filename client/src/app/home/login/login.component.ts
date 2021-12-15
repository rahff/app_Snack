import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public messageError: string;
  public messageSuccess: string;
  public localEmail: string;
  private subcription: Subscription;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subcription = this.userService.currentUser$.subscribe((userInfo: any) =>{
      if (userInfo){
        this.localEmail = userInfo.local.email;
      }
    })
    this.initForm();
  }
  initForm(): void {
    this.loginForm = this.fb.group({
      email: [this.localEmail, [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const body = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      };
      this.userService
        .login(body)
        .then((response: boolean) => {
          if (response) {
            this.messageSuccess = 'Bienvenue, vous êtes connecté';
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 1800);
          }
        })
        .catch((message: string) => {
          this.messageError = message;
          this.initForm();
        });
      this.loginForm.reset();
    }
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
