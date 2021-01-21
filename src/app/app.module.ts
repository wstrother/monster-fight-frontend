import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesListItemComponent } from './components/species-list-item/species-list-item.component';
import { SpeciesStatDivComponent } from './components/species-stat-div/species-stat-div.component';
import { MonsterDisplayComponent } from './components/monster-display/monster-display.component';
import { CharStatDivComponent } from './components/char-stat-div/char-stat-div.component';
import { SpeciesDivComponent } from './components/species-div/species-div.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesListComponent,
    SpeciesListItemComponent,
    SpeciesStatDivComponent,
    MonsterDisplayComponent,
    CharStatDivComponent,
    SpeciesDivComponent
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
