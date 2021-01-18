import { Component } from '@angular/core';
import { Specie } from './models/specie';
import { Monster } from './models/monster';
import { MonsterService } from './services/monster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monster-fight-frontend';
  selectedSpecie?: Specie;
  selectedMonster?: Monster;

  constructor(private monsterService: MonsterService) {}

  pickSpecies(specie: Specie) {
    this.selectedSpecie = specie;
    this.monsterService.getMonFromApi(specie.id).subscribe(
      (mon) => {
        this.selectedMonster = mon;
        // this.monsterService.setMonster(mon);
      }
    )
  }
}
