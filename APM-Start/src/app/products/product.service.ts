import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {tap, catchError, map} from "rxjs/operators"
import { Iproduct } from "./product";

@Injectable({
    providedIn: "root"
})
export class ProductService {

    private _url = "api/products/products.json"
    constructor(private http: HttpClient){}

    getProducts(): Observable<Iproduct[]> {
        return this.http.get<Iproduct[]>(this._url).pipe(
          tap(data => console.log("All data", JSON.stringify(data))),
          catchError(this.handleError)
        );    
    }

    getProduct(id:number): Observable<Iproduct | undefined> {
      return this.getProducts().pipe(map((products: Iproduct[]) => products.find(p => p.productId === id)))
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = ""
        if(err.error instanceof ErrorEvent) {
          errorMessage = `An error occured: ${err.error.message}`
        } else {
          errorMessage = `Server returned: ${err.status}, error message is ${err.message}`
        }
        console.log(errorMessage)
        return throwError(errorMessage)
    }
}
