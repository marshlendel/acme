import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: "products", component: ProductListComponent}, 
      {path: "products/:id",
      canActivate: [ProductDetailsGuard],
      component: ProductDetailsComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
