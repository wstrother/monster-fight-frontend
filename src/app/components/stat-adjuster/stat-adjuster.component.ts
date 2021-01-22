import { Component, OnInit, Input } from '@angular/core';
import { CharCreatorService } from '../../services/char-creator.service';
import { Monster } from '../../models/monster';

@Component({
  selector: 'app-stat-adjuster',
  templateUrl: './stat-adjuster.component.html',
  styleUrls: ['./stat-adjuster.component.scss']
})
export class StatAdjusterComponent implements OnInit {
  @Input() monster?: Monster;
  dvTotal?: number;

  constructor(private charCreator: CharCreatorService) { }

  ngOnInit(): void {
    this.charCreator.getCurrentDvs().subscribe(
      (dvs: number) => {this.dvTotal = dvs;}
    )
  }

  changeStat(event: any): void {
    this.charCreator.adjustStat(event.statName, event.value);
  }
}
