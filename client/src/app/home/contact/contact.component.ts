import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/shared/services/contact.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  get name() {
    return this.contactForm.get('name');
  }
  get firstname() {
    return this.contactForm.get('firstname');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  public localName: string;
  public localfirstName: string;
  public localemail: string;
  private subscription: Subscription;
  public noValidForm = false;
  public isLoading: boolean = false;
  public messageResponse: boolean;
  public messageError: boolean;
  public contactForm: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private contactService: ContactService,
              private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.userService.currentUser$.subscribe((user: any) =>{
      this.localName = user.name;
      this.localfirstName = user.firstname;
      this.localemail = user.local.email;
    })
    this.initForm();
    console.log(this.name);
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      name: [this.localName, Validators.required],
      firstname: [this.localfirstName, Validators.required],
      email: [this.localemail, [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.noValidForm = true;
      return;
    } else {
      this.isLoading = true;
      this.noValidForm = false;
      const body = {
        name: this.name.value,
        firstname: this.firstname.value,
        email: this.email.value,
        message: this.message.value,
      };
      this.contactService.postMessage(body).then((res: boolean)=>{
        if(res){
          console.log(res);
          this.isLoading = false
          this.messageResponse = true;
          setTimeout(() => {
            this.router.navigate(['/'])
          }, 2500);
        }
      }).catch((res: boolean)=>{
        console.log(res);
        this.isLoading = false
        this.messageError = true
        
      })
      this.contactForm.reset();
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
