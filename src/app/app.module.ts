import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginsComponent } from './login-com/logins/logins.component';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/Shared/password-match.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    LoginsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    AlertModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
    

    
  ],
  providers: [BsModalService,AlertConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
