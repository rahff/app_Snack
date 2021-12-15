import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  makeSimpleAlert(message: string, icon: "success" | "info" | "warning" | "error", timer: number): Promise<any>{
   return Swal.fire({
      position: 'center',
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: timer
    })
  }
}
