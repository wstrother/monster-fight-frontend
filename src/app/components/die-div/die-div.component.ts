import { Component, OnInit, Input } from '@angular/core';
import { Die } from '../../models/die';


@Component({
  selector: 'app-die-div',
  templateUrl: './die-div.component.html',
  styleUrls: ['./die-div.component.scss']
})
export class DieDivComponent implements OnInit {
  @Input() die!: Die;

  constructor() { }

  ngOnInit(): void {
  }

}
