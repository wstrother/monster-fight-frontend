import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../../models/specie';


@Component({
  selector: 'app-species-list-item',
  templateUrl: './species-list-item.component.html',
  styleUrls: ['./species-list-item.component.scss']
})
export class SpeciesListItemComponent implements OnInit {
  @Input() specie!: Specie;

  constructor() { }

  ngOnInit(): void {
  }
}
