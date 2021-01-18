import { Component, OnInit } from '@angular/core';
import { Specie } from '../../models/specie';
import { MonApiService } from '../../services/mon-api.service';
import { CharCreatorService } from '../../services/char-creator.service';


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

    // this.charCreator.getMessage().subscribe(
    //   msg => console.log(`RECEIVED FUCKING MESSAGE ${msg}`)
    // )
  }

  raisePickSpecies(specie: Specie) {
    console.log("sending message...");
    this.charCreator.sendMessage("This message has been sent through charCreator");
  }

}
