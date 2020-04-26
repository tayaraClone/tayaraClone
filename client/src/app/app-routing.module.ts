import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MyProdsComponent } from './components/my-prods/my-prods.component';
import { MakeNewProdComponent } from './components/make-new-prod/make-new-prod.component';
import { ProdProfileComponent } from './components/clickedProduct/prod-profile/prod-profile.component';

const routes: Routes = [ // my routes
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'makeProduct', component: MakeNewProdComponent },
  { path: 'myProducts', component: MyProdsComponent },
  { path: 'product/:_id', component: ProdProfileComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
