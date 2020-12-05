import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassageListComponent } from './passage-list/passage-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from "@angular/forms";
import { TicketOfficeComponent } from './ticket-office/ticket-office.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    PassageListComponent,
    ShoppingCartComponent,
    TicketOfficeComponent,
    FooterComponent,
    AboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
