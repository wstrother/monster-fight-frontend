import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-char-stat-div',
  templateUrl: './char-stat-div.component.html',
  styleUrls: ['./char-stat-div.component.scss']
})
export class CharStatDivComponent implements OnInit {
  @Input() name: string = "";
  @Input() dv: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
