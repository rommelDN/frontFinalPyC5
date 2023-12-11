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
import { ProductCardComponent } from './components/shop/product-card/ProductCardComponent';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './components/shop/item/item.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { TbProductComponent } from './components/admin/products/tb-product/tb-product.component';
import { ModalComponent } from './components/admin/products/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import { EditProductComponent } from './components/admin/products/tb-product/edit-product/edit-product.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';
import { TbVComponent } from './components/admin/ventas/tb-v/tb-v.component';
import { ComprasComponent } from './components/compras/compras.component';
import { TbComComponent } from './components/compras/tb-com/tb-com.component';
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
    ProductsComponent,
    TbProductComponent,
    ModalComponent,
    EditProductComponent,
    VentasComponent,
    TbVComponent,
    ComprasComponent,
    TbComComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
