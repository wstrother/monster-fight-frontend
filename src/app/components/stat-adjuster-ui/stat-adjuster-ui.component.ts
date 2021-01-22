import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CharCreatorService } from '../../services/char-creator.service';
import { Monster } from '../../models/monster';


@Component({
  selector: 'app-stat-adjuster-ui',
  templateUrl: './stat-adjuster-ui.component.html',
  styleUrls: ['./stat-adjuster-ui.component.scss']
})
export class StatAdjusterUiComponent implements OnInit {
  @Input() statName!: string;
  @Input() monster?: Monster;
  @Output() statChange: EventEmitter<any> = new EventEmitter();

  constructor(private charCreator: CharCreatorService) { }

  ngOnInit(): void {
  }

  lowerStat(): void {
    this.statChange.emit({
      statName: this.statName,
      value: -1
    });
  }

  raiseStat(): void {
    this.statChange.emit({
      statName: this.statName,
      value: 1
    });
  }
}
