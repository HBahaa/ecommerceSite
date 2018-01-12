import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    ImageSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'cart', component: CartComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactusComponent},
      {path: 'category', component: CategoryComponent},
      {path: '', component: HomeComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
