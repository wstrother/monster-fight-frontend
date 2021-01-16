import { Component, OnInit } from '@angular/core';
import { Specie } from '../models/specie';
import { SpeciesService } from '../services/species.service';


@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {
  species: Specie[] = [];

  constructor(private speciesService: SpeciesService) {
   }

  ngOnInit() {
    this.speciesService.getSpeciesList().subscribe(
      (species: Specie[]) => {this.species = species;}
    );
  }

}
