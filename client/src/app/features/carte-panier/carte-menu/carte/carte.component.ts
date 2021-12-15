import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit, OnChanges {
  public openModal = false;
  public openAddToCart = false;
  public name: string;
  public truc: string;
  public nbr = 1;
  public param: string;
  @Input() private productList: Product[];
  public itemList: Product[];
  constructor(private cartService: CartService) {}

  ngOnChanges(): void {
    this.itemList = this.productList;
  }
  ngOnInit(): void {
    console.log('init');
    console.log(this.itemList);
    
    
  }
  openerModal(name?: string): void {
    this.openModal = !this.openModal;
    this.name = name;
  }
  openerAddToCart(name?: string): void {
    this.openAddToCart = !this.openAddToCart;
    this.truc = name;
    this.nbr = 1;
  }
  addToCart(product: Product): void {
    const quantity = this.nbr;
    this.openerAddToCart();
    this.cartService.addToCart(product, quantity);
  }
  increment(): void {
    this.nbr++;
  }
  decrement(): void {
    if(this.nbr >=1){
      this.nbr--;
    }else if(this.nbr === 0){
      this.openerAddToCart();
    }
  }
 
}
