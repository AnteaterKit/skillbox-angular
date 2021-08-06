import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CatalogComponent } from "./catalog/catalog.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "catalog",
    component: CatalogComponent
  },
  // {
  //   path: "product",
  //   loadChildren: () => import('./product-card/product-card.module').then(m => m.ProductCardModule)
  // },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

// export const options: ExtraOptions = {
//   enableTracing: false,
//   preloadingStrategy: PreloadAllModules
// };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
})
export class AppRoutingModule { }
