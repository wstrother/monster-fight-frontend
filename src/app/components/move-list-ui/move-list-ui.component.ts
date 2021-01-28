import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Move } from 'src/app/models/move';

@Component({
  selector: 'app-move-list-ui',
  templateUrl: './move-list-ui.component.html',
  styleUrls: ['./move-list-ui.component.scss']
})
export class MoveListUiComponent implements OnInit {
  @Input() moves!: Move[];
  @Output() onPickMove: EventEmitter<Move> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pickMove(move: Move) {
    this.onPickMove.emit(move);
  }
}
