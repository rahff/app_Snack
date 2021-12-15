import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: Product[];
  public product$ = new BehaviorSubject<Product[]>([]);
  private api = environment.API;
  constructor(private http: HttpClient) {
    this.getProductList();
  }


  getProductList(): void {
     this.http.get<Response>(this.api + 'products').subscribe(
      (response: Response) => {
        this.productList = response.result;
        this.emitProduct();
      });
}
  emitProduct(): void {
    this.product$.next(this.productList);
  }
  addProduct(body: Product, file: File): Promise<string> {
    return new Promise((resolve, reject)=>{
      let productData = new FormData();
      productData.append('product', JSON.stringify(body));
      productData.append('image',file);
      this.http.post(this.api+'products/add',productData).subscribe((response: Response) =>{
        if(response.status === 200){
          resolve(response.message);
        }else{
          reject(response.message);
        }
      })
    })
  }
  getProductById(id: string): Observable<Response> {
    return this.http.get<Response>(this.api + "products/" + id);
  }
  updateProduct(body: Product, id: string, file?:File): Promise<string> {
    return new Promise((resolve, reject) =>{
      const formData = new FormData();
      formData.append("product",JSON.stringify(body));
      if(file){
        formData.append("image",file)
      }
      this.http.patch(this.api+ 'products/update/'+ id,formData).subscribe(
        (response: Response)=>{
            if(response.status === 200){
              resolve(response.message);
            }else{
              reject(response.message)
            }
        })
    })
  }
  deleteProduct(id: string): Promise<string> {
    return new Promise((resolve, reject)=>{
      this.http.delete(this.api + "products/"+id).subscribe((response: Response) =>{
        if(response.status === 200){
          resolve(response.message);
        }else{
          reject(response.message);
        }
      })
    })
  }
}
