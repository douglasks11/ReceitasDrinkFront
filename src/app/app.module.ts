import { ApprovalWorkFlowComponent } from './components/workflow/approval-work-flow/approval-work-flow.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllDrinksHomePageComponent } from './components/all-drinks-home-page/all-drinks-home-page.component';
import { DeleteDrinkComponent } from './components/delete-drink/delete-drink.component';
import { SaveDrinkComponent } from './components/save-drink/save-drink.component';
import { CommonModule } from '@angular/common';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailDrinkComponent } from './components/detail-drink/detail-drink.component';
import { ListNotApprovelComponent } from './components/workflow/list-not-approvel/list-not-approvel.component';
import { StatusServicesComponent } from './components/workflow/status-services/status-services.component';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { UpdateDrinkComponent } from './components/update-drink/update-drink.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDrinksHomePageComponent,
    DeleteDrinkComponent,
    SaveDrinkComponent,
    DetailDrinkComponent,
    ListNotApprovelComponent,
    StatusServicesComponent,
    ApprovalWorkFlowComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    UpdateDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    Ng2ImgMaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
