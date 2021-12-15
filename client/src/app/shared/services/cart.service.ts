import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';
import { Item } from '../models/item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart$ = new BehaviorSubject<Cart>(null);
  public cart: Cart = new Cart();
  constructor() {
    this.cart.items = [];
    this.checkLocalStorage();
    this.emitCart();
  }

  addToCart(newProduct: Product, quantity: number): void {
    const isOnCart = this.cart.items.find(item => item.product.name === newProduct.name);
    if (!isOnCart){
      const newItem = new Item();
      newItem.product = newProduct;
      newItem.quantity = quantity;
      newItem.cost = newProduct.price * quantity;
      this.cart.items.push(newItem);
      this.cart.nbrOfItem += quantity;
      this.cart.total += newProduct.price * quantity;
      this.emitCart();
    }else{
      isOnCart.quantity += quantity;
      isOnCart.cost += newProduct.price * quantity;
      this.cart.nbrOfItem += quantity;
      this.cart.total += newProduct.price * quantity;
      this.emitCart();
    }
    }
  removeItem(product: Product): void {
    const removed = this.cart.items.find((i) => i.product === product);
    if (removed) {
      const index = this.cart.items.indexOf(removed);
      this.cart.items.splice(index, 1);
      const nbrOfDeleted = removed.quantity;
      const newNbrOfItem = this.cart.nbrOfItem - nbrOfDeleted;
      this.cart.nbrOfItem = newNbrOfItem;
      const costDeleted = removed.cost;
      const newCostTotalCart = this.cart.total - costDeleted;
      this.cart.total = newCostTotalCart;
      this.emitCart();
    }else{
      return;
    }
  }
  removeOne(product: Product): void {
    const item = this.cart.items.find((i) => i.product === product);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
        item.cost -= item.cost;
        this.cart.nbrOfItem--;
        const newTotalOfCart = this.cart.total - product.price;
        this.cart.total = newTotalOfCart;
      } else {
        const index = this.cart.items.indexOf(item);
        this.cart.items.splice(index, 1);
        const itemCost = item.cost;
        this.cart.nbrOfItem --;
        const newTotalOfCart = this.cart.total - itemCost;
      }
      this.emitCart();
    }else{
      return;
    }
  }
  reinitCart(): void {
    this.cart.items = [];
    this.cart.nbrOfItem = 0;
    this.cart.total = 0;
    this.emitCart();
  }
  emitCart(): void {
    this.cart$.next(this.cart);
    this.saveCartOnStorage();
  }
  saveCartOnStorage(): void{
    const asCart = localStorage.getItem('cart');
    if (asCart){
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }else{
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
  checkLocalStorage(): void {
    const cartLocal = localStorage.getItem('cart');
    if (cartLocal){
      this.cart = JSON.parse(cartLocal);
    }
  }
  refreshCommande(detail:{product: string, quantity: number, cost: number}[]): void {
    this.reinitCart();
    for(let i = 0; i < detail.length; i++){
      const item = new Item();
      item.product = {name: detail[i].product, price: detail[i].cost * 100};
      item.quantity = detail[i].quantity;
      this.cart.nbrOfItem += detail[i].quantity;
      if(item.cost){
        item.cost += detail[i].cost * 100;
        this.cart.total += detail[i].cost * 100; 
      }else{
        item.cost = detail[i].cost * 100;
        this.cart.total += detail[i].cost * 100; 
      }
      this.cart.items.push(item);
      
    }
   this.saveCartOnStorage();
  }
}
