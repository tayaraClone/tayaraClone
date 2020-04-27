import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProdsComponent } from './components/home/all-prods/all-prods.component'
import { ProdsService } from './services/prods.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdComponent } from './components/home/prod/prod.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { BudgetComponent } from './components/home/budget/budget.component';
import { HomeComponent } from './components/home/home/home.component';
import { HomeComponentsService } from './services/home-components.service';
import { AuthService } from './services/auth/auth.service';
import { NotOpenedAccNavComponent } from './components/navbar/not-opened-acc-nav/not-opened-acc-nav.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { OpenedAccNavComponent } from './components/navbar/opened-acc-nav/opened-acc-nav.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MyProdsComponent } from './components/my-prods/my-prods.component';
import { MakeNewProdComponent } from './components/make-new-prod/make-new-prod.component';
import { MyProdComponent } from './components/my-prods/my-prod/my-prod.component';
import { SearchComponent } from './components/home/search/search.component';
import { SearchPageComponent } from './components/searchPage/search-page/search-page.component';
import { ProdProfileComponent } from './components/clickedProduct/prod-profile/prod-profile.component';
import { Prod1Component } from './components/clickedProduct/prod1/prod1.component';
import { Prod2Component } from './components/clickedProduct/prod2/prod2.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProdsComponent,
    ProdComponent,
    CategoriesComponent,
    BudgetComponent,
    HomeComponent,
    NotOpenedAccNavComponent,
    SignInComponent,
    OpenedAccNavComponent,
    NavbarComponent,
    SignUpComponent,
    NotFoundPageComponent,
    MyProdsComponent,
    MakeNewProdComponent,
    MyProdComponent,
    SearchComponent,
    SearchPageComponent,
    ProdProfileComponent,
    Prod1Component,
    Prod2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProdsService,
    HomeComponentsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
