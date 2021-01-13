import { Component, OnInit } from '@angular/core';
import { Specie } from '../models/specie';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {
  species: Specie[] = [
    new Specie(1, "JOLLYGATOR", "BLUE"),
    new Specie(2, "QUAILEAF", "GREEN"),
    new Specie(3, "BLAZEBRA", "RED"),
    {
      name: "PSYCHOWL",
      id: 4,
      color: "PURPLE"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
