import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProducListComponent } from './components/home/produc-list/produc-list.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductCardComponent } from './components/shop/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { TableTotalComponent } from './components/cart/table-total/table-total.component';
import { TableContentComponent } from './components/cart/table-content/table-content.component';
import { APP_ROUTING } from './app.routes';
import { AdminComponent } from './components/admin/admin.component';
import { AdnavbarComponent } from './components/admin/adnavbar/adnavbar.component';
import { TopnavbarComponent } from './components/admin/topnavbar/topnavbar.component';
import { CardComponent } from './components/admin/card/card.component';
import { TableComponent } from './components/admin/table/table.component';
import { PopularComponent } from './components/admin/popular/popular.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './services/logicdiraba/auth.guard';
import { AuthService } from './services/logicdiraba/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './components/shop/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProducListComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    ShopComponent,
    ProductCardComponent,
    CartComponent,
    TableTotalComponent,
    TableContentComponent,
    AdminComponent,
    AdnavbarComponent,
    TopnavbarComponent,
    CardComponent,
    TableComponent,
    PopularComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
