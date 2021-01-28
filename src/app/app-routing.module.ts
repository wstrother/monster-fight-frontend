import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MovesComponent } from './pages/moves/moves.component';
import { SpeciesComponent } from './pages/species/species.component';
import { StatsComponent } from './pages/stats/stats.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'species', component: SpeciesComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'moves', component: MovesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
