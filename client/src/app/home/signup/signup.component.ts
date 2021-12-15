import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  get name(): AbstractControl {
    return this.signupForm.get('name');
  }
  get firstname(): AbstractControl {
    return this.signupForm.get('firstname');
  }
  get adress(): AbstractControl {
    return this.signupForm.get('adress');
  }
  get email(): AbstractControl {
    return this.signupForm.get('email');
  }
  get password(): AbstractControl {
    return this.signupForm.get('password');
  }
  get confirm(): AbstractControl {
    return this.signupForm.get('confirm');
  }
  public signupForm: FormGroup;
  public errorServer: string;
  public messageSuccess: string;
  public noValidForm = false;
  public noMatchedPassword = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adress: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: [''],
    });
  }
  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.noValidForm = true;
      return;
    } else if (this.password.value !== this.confirm.value) {
      this.noMatchedPassword = true;
      return;
    } else {
      this.noValidForm = false;
      const body = {
        name: this.name.value,
        firstname: this.firstname.value,
        email: this.email.value,
        adress: this.adress.value,
        password: this.password.value,
      };
      this.userService
        .verifEmail(body.email)
        .then(() => {
          this.userService
            .signup(body)
            .then((message: string) => {
              this.messageSuccess = message;
            })
            .catch((message: string) => {
              this.errorServer = message;
            });
          this.signupForm.reset();
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1800);
        })
        .catch((message: string) => {
          this.errorServer = message;
        });
    }
  }
}
