import { Component, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move';
import { MovePool } from 'src/app/models/move-pool';
import { CharCreatorService } from 'src/app/services/char-creator.service';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {
  moves: Move[] = [];
  movePool?: MovePool;

  constructor(private charCreator: CharCreatorService) { }

  ngOnInit(): void {
    this.moves=this.charCreator.getMoveList();
    this.movePool=this.charCreator.getMovePool();
  }

  setMove(move: Move, slot: number) {
    this.charCreator.handleMoveSlot(move, slot);
    // this.charCreator.addMove(move);
  }
}
