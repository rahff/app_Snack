import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { Response } from '../models/response.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private api = environment.API;
  public order: Order;
  public orderList: Order[];
  public orderList$ = new Subject();
  constructor(private http: HttpClient) { }

  createOrder(order: Order): Promise<boolean> {
    return new Promise((resolve, reject)=>{
      console.log("inCreateOderServive");
      
      this.http.post(this.api + 'orders/new',order).subscribe((response: Response)=>{
        if(response.status === 200){
          this.getOrderList();
          resolve(true);
        }else{
          reject('erreur lors de l\'enregistrement de la commande');
        }
      });
    });
  }
  getOrderList(): Promise<Response> {
    return new Promise((resolve, reject) =>{
      this.http.get<Response>(this.api + 'orders/list')
      .subscribe(
        (response: Response)=>{
          if(response.status === 200){
            this.orderList = response.result;
            this.emitOrder();
            resolve(response);
          }else{
            reject(response);
          }
        });
    })
      
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
