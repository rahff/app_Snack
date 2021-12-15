import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private API = environment.API
  constructor(private http: HttpClient) { }
  postMessage(body:any):Promise<boolean>{
    return new Promise((resolve, reject)=>{
      this.http.post(this.API + "contact", body).subscribe((response: Response)=>{
        if(response.status === 200){
          resolve(true)
        }else{
          reject(false)
        }
      })
    })
  }
}
