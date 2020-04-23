import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProdsComponent } from './components/home/all-prods/all-prods.component'
import { ClientProdsService } from './services/client-prods.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdComponent } from './components/home/prod/prod.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { BudgetComponent } from './components/home/budget/budget.component';
import { HomeComponent } from './components/home/home/home.component';
import { HomeComponentsService } from './services/home-components.service';
@NgModule({
  declarations: [
    AppComponent,
    AllProdsComponent,
    ProdComponent,
    CategoriesComponent,
    BudgetComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientProdsService,
    HomeComponentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
