import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDrinksComponent } from './lista-drinks/lista-drinks.component';
import { InsereDrinksComponent } from './insere-drinks/insere-drinks.component';
import { DeletaDrinksComponent } from './deleta-drinks/deleta-drinks.component';
import { AtualizaDrinksComponent } from './atualiza-drinks/atualiza-drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDrinksComponent,
    InsereDrinksComponent,
    DeletaDrinksComponent,
    AtualizaDrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
