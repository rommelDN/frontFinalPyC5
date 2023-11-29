import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const APP_ROUTES : Routes = [
  {path:'home', component:HomeComponent },
  {path:'about', component: AboutComponent },
  {path:'contact', component:ContactComponent },
  {path:'news', component: NewsComponent },
  {path:'shop', component: ShopComponent },
  {path:'cart', component: CartComponent },
  {path:'admin', component: AdminComponent },
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);