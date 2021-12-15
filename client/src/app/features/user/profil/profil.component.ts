import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from 'src/app/shared/models/response.model';
import { User } from 'src/app/shared/models/user';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  @ViewChild('newName') public newName: ElementRef<HTMLInputElement>;
  public name: string;
  public isModif = false;
  public userName: string;
  public userFirstname: string;
  public userEmail: string;
  public userAdress: string;
  public userId: string;
  public updatePasswordForm: FormGroup;
  public errorPassword = false;
  public errorServer: string;
  public messageSuccess: string;
  constructor(private userService: UserService, 
              private fb: FormBuilder,
              private alertService: AlertService) {}

  ngOnInit(): void {
      this.userService.getCurrentUser().subscribe((userInfos: any) => {
      this.userName = userInfos.name;
      this.userFirstname = userInfos.firstname;
      this.userAdress = userInfos.adress;
      this.userEmail = userInfos.email;
      this.userId = userInfos._id;
    });
    this.initForm();
    
  }
  updateField(name: string, butt: number): void {
    const arrayButton = document.querySelectorAll('.se');
    if (!this.isModif) {
      this.name = name;
      this.isModif = !this.isModif;
      for (let i = 0; i < 5; i++) {
        arrayButton[i].innerHTML =
          i === butt
            ? "Annuler <i class='bi bi-skip-backward-btn'></i>"
            : "Modifier <i class='bi bi-pencil-fill'></i>";
        if (i !== butt) {
          arrayButton[i].setAttribute('disabled', 'true');
        }
      }
    } else {
      this.name = undefined;
      this.isModif = false;
      for (let i = 0; i < 5; i++) {
        arrayButton[i].innerHTML = "Modifier <i class='bi bi-pencil-fill'></i>";
        arrayButton[i].removeAttribute('disabled');
      }
    }
  }
  submitOneField(fieldName: string, id: number): void  {
    if (fieldName === 'password') {
      if (
        this.updatePasswordForm.get('new').value !==
        this.updatePasswordForm.get('confirm').value
      ) {
        this.errorPassword = true;
        return;
      }
      const modifiedPassword = {
        old: this.updatePasswordForm.get('old').value,
        new: this.updatePasswordForm.get('new').value,
        email: this.userEmail
      };
      console.log(this.userId);
      
      this.userService.updateOneField(this.userId, fieldName, modifiedPassword)
      .then((response: Response)=>{
        this.alertService.makeSimpleAlert(response.message, "success", 1800)
      }).catch((message: string) =>{
        this.alertService.makeSimpleAlert(message, "error", 1800)
      })
     ;
      this.updateField(fieldName, id);
      return;
    }
    const fieldModified = { update: this.newName.nativeElement.value };
    this.userService.updateOneField(this.userId, fieldName, fieldModified).then((response: Response)=>{
      const updatedUser: User = {
        email: response.result.local.email,
        name: response.result.name,
        adress: response.result.adress,
        firstname: response.result.firstname,
        role: response.result.role,
        confirm: response.result.confirm,
        _id:  response.result._id,
      }
      this.userService.currentUser$.next(updatedUser)
      this.userName = updatedUser.name;
      this.userFirstname = updatedUser.firstname;
      this.userAdress = updatedUser.adress;
      this.userEmail = updatedUser.email;
      this.alertService.makeSimpleAlert(response.message, "success", 1800)
    }).catch((response: string)=>{
      console.log('echec');
      this.alertService.makeSimpleAlert(response, "error", 1800)
      return response;

    });
    this.updateField(fieldName, id);
  }
  initForm(): void {
    this.updatePasswordForm = this.fb.group({
      old: ['', Validators.required],
      new: ['', Validators.required, Validators.minLength(6)],
      confirm: ['', Validators.required],
    });
  }
}
