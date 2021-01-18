import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Specie } from '../../models/specie';


@Component({
  selector: 'app-species-list-item',
  templateUrl: './species-list-item.component.html',
  styleUrls: ['./species-list-item.component.scss']
})
export class SpeciesListItemComponent implements OnInit {
  @Input() specie!: Specie;
  @Output() pickSpecies: EventEmitter<Specie> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPickSpecies(specie: Specie) {
    this.pickSpecies.emit(specie);
  }
}
