import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducteursComponent } from './producteurs/producteurs.component';

const routes: Routes = [
  { path: 'producteurs', component: ProducteursComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
