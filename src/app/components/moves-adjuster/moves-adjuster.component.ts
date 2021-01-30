import { Component, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move';
import { MovePool } from 'src/app/models/move-pool';
import { CharCreatorService } from 'src/app/services/char-creator.service';

@Component({
  selector: 'app-moves-adjuster',
  templateUrl: './moves-adjuster.component.html',
  styleUrls: ['./moves-adjuster.component.scss']
})
export class MovesAdjusterComponent implements OnInit {
  movePool?: MovePool;

  constructor(private charCreator: CharCreatorService ) {}

  ngOnInit(): void {
    this.movePool=this.charCreator.getMovePool();
  }

  setMove(move: Move, slot: number) {
    this.charCreator.handleMoveSlot(move, slot);
  }
}
