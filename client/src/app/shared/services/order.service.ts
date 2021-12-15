import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { Response } from '../models/response.model';
import { map, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private api = environment.API;
  public order: Order;
  public orderList: Order[];
  public orderList$ = new Subject();
  constructor(private http: HttpClient,
              private userService: UserService) { }

  createOrder(order: Order): Promise<boolean> {
    return new Promise((resolve, reject)=>{
      console.log("inCreateOderServive");
      
      this.http.post(this.api + 'orders/new',order).subscribe((response: Response)=>{
        if(response.status === 200){
          const user: User = {
            confirm: response.result.confirm,
            email: response.result.local.email,
            _id: response.result._id,
            adress: response.result.adress,
            commandes: response.result.commandes,
            firstname: response.result.firstname,
            name: response.result.name,
            role: response.result.role
          }
          this.userService.currentUser$.next(user)
          resolve(true);
        }else{
          reject('erreur lors de l\'enregistrement de la commande');
        }
      });
    });
  }
  getOrderList(): Observable<any> {
      return this.http.get<any>(this.api + 'orders/list').pipe(
        map((response:any)=>{
            return response.result
        }));
  }
  deleteOrder(id: string): Promise<string> {
    return new Promise((resolve, reject)=>{
      this.http.delete(this.api + 'orders/delete/' + id).subscribe(
        (response: Response) =>{
          if(response.status === 200){
            this.getOrderList();
            resolve(response.message);
          }else{
            reject(response.message);
          }
        })
    })
  }
  emitOrder(): void {
    this.orderList$.next(this.orderList);
  }
}
