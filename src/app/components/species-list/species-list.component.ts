import { Component, OnInit } from '@angular/core';
import { Specie } from '../../models/specie';
import { Monster } from '../../models/monster'; 
import { MonApiService } from '../../services/mon-api.service';
import { CharCreatorService } from '../../services/char-creator.service';
import { Move } from 'src/app/models/move';
import { MovePool } from 'src/app/models/move-pool';


@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {
  species: Specie[] = [];

  constructor(private monApi: MonApiService, private charCreator: CharCreatorService) {
   }

  ngOnInit() {
    this.monApi.getSpeciesList().subscribe(
      (species: Specie[]) => {this.species = species;}
    );
  }

  pickSpecies(specie: Specie) {
    this.monApi.getMonster(specie.id).subscribe(
      (mon: Monster) => {this.charCreator.setMonster(mon);}
    );
    
    this.monApi.getSpeciesMoves(specie.id).subscribe(
      (moves: Move[]) => {this.charCreator.setSpecMoves(moves);}
    );

    this.monApi.getMovePool(specie.id).subscribe(
      (pool: MovePool) => {this.charCreator.setMovePool(pool)}
    );
  }

}
