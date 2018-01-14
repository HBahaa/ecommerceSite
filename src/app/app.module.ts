import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import {NativeScriptHttpModule} from "nativescript-angular/http";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpModule, Http } from "@angular/http";



import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsSliderComponent } from './components/products-slider/products-slider.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { FilterComponent } from './components/filter/filter.component';
import { StarsComponent } from './components/stars/stars.component';
import { DiscountCardComponent } from './components/discount-card/discount-card.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ViewSectionComponent } from './components/view-section/view-section.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { Checkoutstep1Component } from './components/checkoutstep1/checkoutstep1.component';
import { Checkoutstep2Component } from './components/checkoutstep2/checkoutstep2.component';
import { Checkoutstep3Component } from './components/checkoutstep3/checkoutstep3.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    ProductComponent,
    CartComponent,
    ProductsSliderComponent,
    AboutComponent,
    CategoryComponent,
    FilterComponent,
    StarsComponent,
    DiscountCardComponent,
    ContactusComponent,
    ViewSectionComponent,
    ImageSectionComponent,
    ConfirmEmailComponent,
    Checkoutstep1Component,
    Checkoutstep2Component,
    Checkoutstep3Component,
    ForgetPasswordComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'cart', component: CartComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactusComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'confirmEmail', component: ConfirmEmailComponent},
      {path: 'forgetPassword', component: ForgetPasswordComponent},
      {path: 'checkoutstep1', component: Checkoutstep1Component},
      {path: 'checkoutstep2', component: Checkoutstep2Component},
      {path: 'checkoutstep3', component: Checkoutstep3Component},
      {path: '', component: HomeComponent},
    ]),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            deps: [HttpClient],
            useFactory: (translateLoaderFactory)
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
