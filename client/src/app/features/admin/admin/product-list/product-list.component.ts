import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public message: string;
  public messageError: string;
  public idProduct:string;
  public products: Observable<Product[]> = this.productService.product$.asObservable();
  public modal:boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.emitProduct()
  }
  openModal(id: string): void{
    this.idProduct = id;
    if(!this.modal){
      this.modal = true
    }else{
      return;
    }
  }
  closeModal(): void{
    this.idProduct = null;
    if(this.modal){
      this.modal = false;
    }else{
      return;
    }
  }
  deleteProduct(): void {
    const id = this.idProduct;
    this.productService.deleteProduct(id)
    .then((message: string) =>{
      this.message = message;
    }).catch((message: string) =>{
      this.messageError = message;
    })
    this.productService.getProductList();
    setTimeout(()=>{
      this.message = null;
    },2000)
  }
}
