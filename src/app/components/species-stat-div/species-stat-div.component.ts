import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-species-stat-div',
  templateUrl: './species-stat-div.component.html',
  styleUrls: ['./species-stat-div.component.scss']
})
export class SpeciesStatDivComponent implements OnInit {
  @Input() name: string = "";
  @Input() value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
