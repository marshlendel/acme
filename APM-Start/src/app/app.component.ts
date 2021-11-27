import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
   <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav navbar-nav nav-pills">
      <li class="nav-item" routerLink="/welcome"><a class="nav-link">Home</a></li>
      <li class="nav-item" routerLink="/products"><a class="nav-link">Product List</a></li>
    </ul>
   </nav>
   <router-outlet></router-outlet>
  `
})
export class AppComponent {
  pageTitle:string = "Acme Product Management"
}