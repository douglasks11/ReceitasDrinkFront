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

@NgModule({
  declarations: [
    AppComponent,
    AllDrinksHomePageComponent,
    DeleteDrinkComponent,
    SaveDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
