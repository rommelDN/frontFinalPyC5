import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BodyComponent } from './components/body/body.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    FiltersComponent,
    BodyComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
