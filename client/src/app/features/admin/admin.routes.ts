import { Routes } from "@angular/router";
import { AdminGuard } from "src/app/shared/services/admin.guard";
import { AddProductComponent } from "./admin/add-product/add-product.component";
import { AdminComponent } from "./admin/admin.component";
import { OrderListComponent } from "./admin/order-list/order-list.component";
import { ProductListComponent } from "./admin/product-list/product-list.component";

export const ADMIN_ROUTES: Routes =[
    {
        path: '', canActivate: [AdminGuard],
        component: AdminComponent,
        children: [
          {
            path: '',
            component: ProductListComponent,
          },
          {
            path: 'ajouter',
            component: AddProductComponent,
          },
          {
            path: 'modifier/:id',
            component: AddProductComponent,
          },
          {
            path: 'order-list',
            component: OrderListComponent,
          },
        ],
      },
]