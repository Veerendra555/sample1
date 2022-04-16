import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonExampleComponent } from './components/button-example/button-example.component';
import { AngularMaterialListModule } from './angular-material-list/angular-material-list.module';
import { WishMessageComponent } from './components/wish-message/wish-message.component';
import { ProdCartComponent } from './components/prod-cart/prod-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonExampleComponent,
    WishMessageComponent,
    ProdCartComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialListModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
