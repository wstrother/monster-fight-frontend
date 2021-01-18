import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopDivComponent } from './components/top-div/top-div.component';
import { BottomDivComponent } from './components/bottom-div/bottom-div.component';

@NgModule({
  declarations: [
    AppComponent,
    TopDivComponent,
    BottomDivComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
