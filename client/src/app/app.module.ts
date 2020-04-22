import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProdsComponent } from './components/home/all-prods/all-prods.component'
import { ClientProdsService } from './services/client-prods.service'

@NgModule({
  declarations: [
    AppComponent,
    AllProdsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClientProdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
