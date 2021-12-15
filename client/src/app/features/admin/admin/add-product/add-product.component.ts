import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { Response } from 'src/app/shared/models/response.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public submitInnerText = "Valider"
  public title = "Ajouter un Produit";
  public product: Product;
  public idProduct: string;
  public notValidInput = false;
  public imagePreview: string;
  public message: string;
  public addProductForm: FormGroup;
  private file: File;
  public isUpdate = false;
  public nbrOfIngredient = 0;
  get ingredients(){
    return this.addProductForm.get('list') as FormArray;
  }
  get image(){
    return this.addProductForm.get('image');
  }
  get category(){
    return this.addProductForm.get('category');
  }
  get name(){
    return this.addProductForm.get('name');
  }
  get price(){
    return this.addProductForm.get('price');
  }
  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.idProduct = param.get('id');
    })
    if(this.idProduct){
      this.productService.getProductById(this.idProduct).subscribe((response: Response)=>{
        this.product = response.result;
        if(this.product){
          console.log("ok product");
          this.title = "Modifier un Produit";
          this.submitInnerText = "Modifier"
          this.initFormUpdate();
        }else{
          console.log("no product");
          this.initFormAdd();
        }
        }, (err)=>{
          console.log(err);
          
        })
      }
        if(!this.product){
          this.initFormAdd();
        }else{
          this.initFormUpdate();
        }
  }
  addIngredient(): void {
    this.ingredients.push(this.fb.control('', Validators.required));
    this.nbrOfIngredient ++;
  }
  initFormAdd(): void {
    this.addProductForm = this.fb.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['1', Validators.required],
      list: this.fb.array([])
    })
  }
  initFormUpdate(): void {
    this.addProductForm = this.fb.group({
      image: [''],
      name: [this.product.name, Validators.required],
      price: [this.product.price, Validators.required],
      category: [this.product.category, Validators.required],
      list: this.fb.array([...this.product.ingredients])
    });
    this.imagePreview = this.product.image;
    console.log(this.file);
    
  }
  onImagePick(event: Event): void {
    this.notValidInput = false;
    const file = (event.target as HTMLInputElement).files[0];
    this.file = file;
    const reader = new FileReader();
    reader.onload = ()=>{
      if(this.image.valid){
        this.imagePreview = reader.result as string;
      }else{
        this.imagePreview = null;
      }
    }
    reader.readAsDataURL(file);
  }
  onSubmit(): void {
    this.isUpdate = false;
    if(this.product && this.addProductForm.valid){
      console.log("product&valid");
      const id = this.idProduct;
      const product: Product = {
        image: '',
        name: this.name.value,
        price: this.price.value,
        category: this.category.value,
        ingredients: this.ingredients.value,
      }
      if(!this.file){
        console.log(("sans file"));
        this.productService.updateProduct(product, id)
        .then((message: string)=>{
          this.message = message;
          this.isUpdate = true;
        })
        .catch((message: string)=>{
          this.message = message;
          this.isUpdate = true;
        });
        this.reInitForm();
        this.notValidInput = false;
      }else{
        console.log(("avec file"));
        
        this.productService.updateProduct(product, id, this.file)
        .then((message: string)=>{
          this.message = message;
          this.isUpdate = true;
        })
        .catch((message: string)=>{
          this.message = message;
          this.isUpdate = true;
        });
        this.reInitForm();
        this.notValidInput = false;
        console.log("afterreinitForm:"+this.addProductForm.valid);
      }
    }else if(this.product && !this.addProductForm.valid && !this.isUpdate){
      this.notValidInput = true;
      return;
    }
    if(this.addProductForm.valid && !this.product){
      console.log("addproduct&valid");
      const product: Product = {
        image: '',
        name: this.name.value,
        price: this.price.value,
        category: this.category.value,
        ingredients: this.ingredients.value,
      }
      this.productService.addProduct(product, this.file).then((message: string)=>{
        this.message = message;
        this.isUpdate = true;
      }).catch((message: string)=>{
        this.message = message;
        this.isUpdate = true;
      })
      this.reInitForm();
    }else if(!this.addProductForm.valid && !this.product && !this.isUpdate){
      this.notValidInput = true;
      return;
    }
   this.productService.getProductList();
  }
  reInitForm(): void {
    this.addProductForm.reset();
        this.imagePreview = null;
        for (let i = 0; i = this.ingredients.controls.length; i++){
          this.ingredients.controls.pop();
        }
        this.notValidInput = false
  }
}
