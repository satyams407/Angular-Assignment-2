import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupcomponentComponent,
    FootercomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
