import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { LoginComponent } from './login/login.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { LogoutComponent } from './logout/logout.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LoginComponent,
    AppheaderComponent,
    AppfooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
