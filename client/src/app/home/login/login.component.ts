import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public localEmail: string;
  public loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const localUser = JSON.parse(localStorage.getItem('user'))
    if(localUser){
      this.localEmail = localUser.email
    }
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
      this.loading = true;
      const body = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      };
      this.userService
        .login(body)
        .then((response: boolean) => {
          if (response) {
            this.loading = false;
            this.loginForm.reset();
            this.alertService.makeSimpleAlert('Bienvenue, vous êtes connecté', "success", 1800).then((res: any)=>{
              this.router.navigate(['/']);
            });
          }
        })
        .catch((message: string) => {
          this.loading = false;
          this.alertService.makeSimpleAlert(message, "error", 1800)
          this.initForm();
        });
    }
  }
}
