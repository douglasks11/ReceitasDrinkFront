import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { ApprovalWorkFlowComponent } from './components/workflow/approval-work-flow/approval-work-flow.component';
import { DetailDrinkComponent } from './components/detail-drink/detail-drink.component';
import { SaveDrinkComponent } from './components/save-drink/save-drink.component';
import { DeleteDrinkComponent } from './components/delete-drink/delete-drink.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDrinksHomePageComponent } from './components/all-drinks-home-page/all-drinks-home-page.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';

const routes: Routes = [
{ path: '', redirectTo: 'drinks', pathMatch: 'full'},
{ path: 'listarDrink', component: AllDrinksHomePageComponent},
{ path: 'deletarDrink', component: DeleteDrinkComponent},
{ path: 'salvarDrink', component: SaveDrinkComponent},
{ path: 'detailDrink/:id', component: DetailDrinkComponent},
{ path: 'workflow', component: ApprovalWorkFlowComponent},
{ path: 'login', component: TelaLoginComponent},
{ path: 'cadastro', component: TelaCadastroComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
