import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { Response } from 'src/app/shared/models/response.model';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  public message: string;
  public subscription: Subscription = new Subscription()
  orderList: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
   this.subscription.add(this.orderService.getOrderList().subscribe((list: any)=>{
     this.orderList = list
   }))
  }
  deleteOrder(id: string): void {
    this.orderService.deleteOrder(id)
    .then((message: string) =>{
      this.message = message;
    }).catch((message: string)=>{
      this.message = message;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
