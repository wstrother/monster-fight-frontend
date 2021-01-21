import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../../models/specie';


@Component({
  selector: 'app-species-div',
  templateUrl: './species-div.component.html',
  styleUrls: ['./species-div.component.scss']
})
export class SpeciesDivComponent implements OnInit {
  @Input() specie!: Specie;
  @Input() stats!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
