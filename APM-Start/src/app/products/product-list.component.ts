import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { Iproduct } from "./product"
import { ProductService } from "./product.service"

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle = "Product List"
    imageWidth = 50
    imageHeight = 40
    isClicked = false
    errorMessage: string = ""
    sub!: Subscription
    products: Iproduct[] = []
    filteredProducts: Iproduct[] = []
    private _listFilter = ""
    get listFilter(): string {
      return this._listFilter
    }

    set listFilter(value:string) {
      this._listFilter = value
      this.filteredProducts = this.filterProducts(value)

    }

    constructor(private productService: ProductService) {
    }


    toggleImage(): void {
        this.isClicked = !this.isClicked
    }

    ngOnInit(): void{
      this.sub = this.productService.getProducts().subscribe({
        next: product => {
          this.products = product;
          this.filteredProducts = this.products
        },
        error: err => this.errorMessage = err
      })
    }

    ngOnDestroy(): void{
      this.sub.unsubscribe()
    }

    filterProducts(filter: string): Iproduct[] {
      let casedFilter = filter.toLowerCase()
       return this.products.filter((product: Iproduct) => product.productName.toLowerCase().includes(casedFilter) )
    }

    onNotify(message: string): void {
      this.pageTitle = `Product List: ${message}`
    }
  }