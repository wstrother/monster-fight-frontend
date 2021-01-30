import { Component, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move';
import { CharCreatorService } from 'src/app/services/char-creator.service';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {
  moves?: Move[];

  constructor(private charCreator: CharCreatorService) { }

  ngOnInit(): void {
    this.moves=this.charCreator.getMoveList();
  }
}
