import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models/monster';
import { CharCreatorService } from '../../services/char-creator.service';


@Component({
  selector: 'app-monster-display',
  templateUrl: './monster-display.component.html',
  styleUrls: ['./monster-display.component.scss']
})
export class MonsterDisplayComponent implements OnInit {
  monster?: Monster;

  constructor(private charCreator: CharCreatorService) {}

  ngOnInit() {
    this.charCreator.getCurrentMon().subscribe(
      (mon: Monster) => {this.monster = mon;}
    );
  }

}
