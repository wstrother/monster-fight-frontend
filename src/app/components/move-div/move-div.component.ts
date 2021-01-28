import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../models/move';

@Component({
  selector: 'app-move-div',
  templateUrl: './move-div.component.html',
  styleUrls: ['./move-div.component.scss']
})
export class MoveDivComponent implements OnInit {
  @Input() move?: Move | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
