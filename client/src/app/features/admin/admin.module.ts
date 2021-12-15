import { NgModule } from '@angular/core';
import { AdminComponent } from 'src/app/features/admin/admin/admin.component';
import { OrderListComponent } from 'src/app/features/admin/admin/order-list/order-list.component';
import { AddProductComponent } from 'src/app/features/admin/admin/add-product/add-product.component';
import { ProductListComponent } from 'src/app/features/admin/admin/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './admin.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminService } from 'src/app/shared/services/admin.service';



@NgModule({
  declarations: [
    AdminComponent,
    OrderListComponent,
    AddProductComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(ADMIN_ROUTES),
    SharedModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
