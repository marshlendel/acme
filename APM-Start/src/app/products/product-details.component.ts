import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = "Product Details"
  product: Iproduct | undefined
  errorMessage = ""
  constructor(private route: ActivatedRoute, 
              private router:Router, 
              private productService: ProductService) { }
   
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"))
    if(id){
      this.getProduct(id)
    }
  }

  press(): void {
    console.log(this.product)
  }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(["/products"])
  }

}
