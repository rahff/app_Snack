import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
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
  public loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
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
      this.alertService.makeSimpleAlert('Veuillez renseigner tous les champs svp', 'info', 2000)
      return;
    } else if (this.password.value !== this.confirm.value) {
      this.alertService.makeSimpleAlert('Les mots de passe ne correspondent pas !', 'warning', 2000)
      return;
    } else {
      this.loading = true;
      const body = {
        name: this.name.value,
        firstname: this.firstname.value,
        email: this.email.value,
        adress: this.adress.value,
        password: this.password.value,
        confirm: false
      };
      this.userService
        .verifEmail(body.email)
        .then(() => {
          this.userService
            .signup(body)
            .then((message: string) => {
              this.loading = false;
              this.alertService.makeSimpleAlert(message, "success", 1700).then((res: any)=>{
              this.signupForm.reset();
              this.router.navigate(['/']);
             })
            })
            .catch((message: number) => {
              if(message === 11000){
                this.loading = false;
                this.alertService.makeSimpleAlert("Cette email est déjà enregistré", "error", 1700);
              }else{
                this.alertService.makeSimpleAlert("Une erreur est survenue ...", "error", 1700);
              }
            });
          this.signupForm.reset();
        })
        .catch((message: number) => {
          if(message === 11000){
            this.loading = false;
            this.alertService.makeSimpleAlert("Cette email est déjà enregistré", "error", 1700);
          }else{
            this.alertService.makeSimpleAlert("Une erreur est survenue ...", "error", 1700);
          }
        });
    }
  }
}
