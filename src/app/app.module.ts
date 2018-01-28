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
import { ItemComponent } from './components/item/item.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsSliderComponent } from './components/products-slider/products-slider.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { FilterComponent } from './components/filter/filter.component';
import { StarsComponent } from './components/stars/stars.component';
import { DiscountItemComponent } from './components/discount-item/discount-item.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ViewSectionComponent } from './components/view-section/view-section.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { Checkoutstep1Component } from './components/checkoutstep1/checkoutstep1.component';
import { Checkoutstep2Component } from './components/checkoutstep2/checkoutstep2.component';
import { Checkoutstep3Component } from './components/checkoutstep3/checkoutstep3.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { OwnedItemComponent } from './components/owned-item/owned-item.component';
import { ByerOwnedItemsComponent } from './components/byer-owned-items/byer-owned-items.component';
import { ByerSuggestedComponent } from './components/byer-suggested/byer-suggested.component';
import { ByerWishlistComponent } from './components/byer-wishlist/byer-wishlist.component';
import { SearchComponent } from './components/search/search.component';
import { ByerNavbarComponent } from './components/byer-navbar/byer-navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ByerProfileComponent } from './components/byer-profile/byer-profile.component';
import { SellerEditProfileComponent } from './components/seller-edit-profile/seller-edit-profile.component';
import { ByerOnDeliveryComponent } from './components/byer-on-delivery/byer-on-delivery.component';
import { SellerNavbarComponent } from './components/seller-navbar/seller-navbar.component';
import { SellerShowProductComponent } from './components/seller-show-product/seller-show-product.component';
import { SellerPublicProfileComponent } from './components/seller-public-profile/seller-public-profile.component';
import { SellerEditProductComponent } from './components/seller-edit-product/seller-edit-product.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductAllSellersComponent } from './components/product-all-sellers/product-all-sellers.component';

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
    ItemComponent,
    ProductComponent,
    ProductsSliderComponent,
    AboutComponent,
    CategoryComponent,
    FilterComponent,
    StarsComponent,
    DiscountItemComponent,
    ContactusComponent,
    ViewSectionComponent,
    ImageSectionComponent,
    ConfirmEmailComponent,
    Checkoutstep1Component,
    Checkoutstep2Component,
    Checkoutstep3Component,
    ForgetPasswordComponent,
    OwnedItemComponent,
    ByerOwnedItemsComponent,
    ByerSuggestedComponent,
    ByerWishlistComponent,
    SearchComponent,
    ByerNavbarComponent,
    SliderComponent,
    ByerProfileComponent,
    SellerEditProfileComponent,
    ByerOnDeliveryComponent,
    SellerNavbarComponent,
    SellerShowProductComponent,
    SellerPublicProfileComponent,
    SellerEditProductComponent,
    SellerAddProductComponent,
    CartComponent,
    ProductAllSellersComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactusComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'product', component: ProductComponent},
      {path: 'productallsellers', component: ProductAllSellersComponent},
      {path: 'confirmEmail', component: ConfirmEmailComponent},
      {path: 'forgetPassword', component: ForgetPasswordComponent},
      {path: 'checkoutstep1', component: Checkoutstep1Component},
      {path: 'checkoutstep2', component: Checkoutstep2Component},
      {path: 'checkoutstep3', component: Checkoutstep3Component},
      {path: 'byerowneditems', component: ByerOwnedItemsComponent},
      {path: 'byersuggested', component: ByerSuggestedComponent},
      {path: 'byerwishlist', component: ByerWishlistComponent},
      {path: 'byerondelivery', component: ByerOnDeliveryComponent},
      {path: 'byerprofile', component: ByerProfileComponent},
      {path: 'sellereditprofile', component: SellerEditProfileComponent},
      {path: 'sellerpublicprofile', component: SellerPublicProfileComponent},
      {path: 'sellershowproduct', component: SellerShowProductComponent},
      {path: 'selleraddproduct', component: SellerAddProductComponent},
      {path: 'sellereditproduct', component: SellerEditProductComponent},
      {path: 'cart', component: CartComponent},
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
