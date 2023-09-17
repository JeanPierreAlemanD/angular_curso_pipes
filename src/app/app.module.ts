import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/primeng.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// configuracion del locale de la app
import localeEsPe from '@angular/common/locales/es-PE'
import localeFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsPe)
registerLocaleData(localeFrCA)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,


  ],
  providers: [
    {
      provide:LOCALE_ID, useValue:'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
