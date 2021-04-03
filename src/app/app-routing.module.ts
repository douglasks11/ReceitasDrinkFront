import { DetailDrinkComponent } from './components/detail-drink/detail-drink.component';
import { SaveDrinkComponent } from './components/save-drink/save-drink.component';
import { DeleteDrinkComponent } from './components/delete-drink/delete-drink.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDrinksHomePageComponent } from './components/all-drinks-home-page/all-drinks-home-page.component';

const routes: Routes = [
{ path: '', redirectTo: 'drinks', pathMatch: 'full'},
{ path: 'listarDrink', component: AllDrinksHomePageComponent},
{ path: 'deletarDrink', component: DeleteDrinkComponent},
{ path: 'salvarDrink', component: SaveDrinkComponent},
{ path: 'detailDrink/:id', component: DetailDrinkComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
