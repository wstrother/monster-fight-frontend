import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesStatDivComponent } from './components/species-stat-div/species-stat-div.component';
import { MonsterDisplayComponent } from './components/monster-display/monster-display.component';
import { SpeciesDivComponent } from './components/species-div/species-div.component';
import { StatAdjusterComponent } from './components/stat-adjuster/stat-adjuster.component';
import { StatAdjusterUiComponent } from './components/stat-adjuster-ui/stat-adjuster-ui.component';
import { MoveDivComponent } from './components/move-div/move-div.component';
import { DieDivComponent } from './components/die-div/die-div.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SpeciesComponent } from './pages/species/species.component';
import { StatsComponent } from './pages/stats/stats.component';
import { MovesComponent } from './pages/moves/moves.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { MoveListUiComponent } from './components/move-list-ui/move-list-ui.component';
import { MovesAdjusterComponent } from './components/moves-adjuster/moves-adjuster.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesListComponent,
    SpeciesStatDivComponent,
    MonsterDisplayComponent,
    SpeciesDivComponent,
    StatAdjusterComponent,
    StatAdjusterUiComponent,
    MoveDivComponent,
    DieDivComponent,
    HomeComponent,
    NavbarComponent,
    SpeciesComponent,
    StatsComponent,
    MovesComponent,
    MovesListComponent,
    MoveListUiComponent,
    MovesAdjusterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
