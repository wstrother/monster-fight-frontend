import { Component, OnInit } from '@angular/core';
import { CharCreatorService } from '../../services/char-creator.service';
import { MonApiService } from '../../services/mon-api.service';
import { Monster } from '../../models/monster';

@Component({
  selector: 'app-stat-adjuster',
  templateUrl: './stat-adjuster.component.html',
  styleUrls: ['./stat-adjuster.component.scss']
})
export class StatAdjusterComponent implements OnInit {
  monster?: Monster | undefined;
  dvTotal?: number;

  constructor(private charCreator: CharCreatorService, private monApi: MonApiService) { }

  ngOnInit(): void {
    this.charCreator.getCurrentDvs().subscribe(
      (dvs: number) => {this.dvTotal = dvs;}
    );
    this.monster = this.charCreator.getMonster();

    this.monApi.getNewCharData().subscribe(
      (data: any) => {this.charCreator.setDvMax(data.dv_max);}
    );
  }

  changeStat(event: any): void {
    this.charCreator.adjustStat(event.statName, event.value);
  }
}
