import { Component, OnInit } from "@angular/core"
import { Iproduct } from "./product"
import { ProductService } from "./product.service"

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
    pageTitle = "Product List"
    imageWidth = 50
    imageHeight = 40
    isClicked = false
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
      this.products = this.productService.getProducts()
      this.filteredProducts = this.products
    }

    filterProducts(filter: string): Iproduct[] {
      let casedFilter = filter.toLowerCase()
       return this.products.filter((product: Iproduct) => product.productName.toLowerCase().includes(casedFilter) )
    }

    onNotify(message: string): void {
      this.pageTitle = `Product List: ${message}`
    }
}