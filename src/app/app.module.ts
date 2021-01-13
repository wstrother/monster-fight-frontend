import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesListItemComponent } from './species-list-item/species-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesListComponent,
    SpeciesListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
