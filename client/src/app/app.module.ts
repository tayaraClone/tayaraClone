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
@NgModule({
  declarations: [
    AppComponent,
    AllProdsComponent,
    ProdComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientProdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
