import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharCreatorService {
  private _monster?: Monster;
  private monSubject: Subject<Monster> = new Subject<Monster>();

  private _dvs: number = 0;
  private dvMax: number = 0;
  private dvSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  // internal attribute methods
  set currentMon(mon: Monster) {
    this._monster = mon;
    this.monSubject.next(mon);
  }

  set currentDvs(value: number) {
    this._dvs = value;
    this.dvSubject.next(value);
  }

  get currentDvs(): number {
    return this._dvs;
  }

  // public Monster methods
  setMonster(mon: Monster): void {
    this.currentMon = mon;
    this.currentDvs = this.dvMax;
  }

  getCurrentMon(): Observable<Monster> {
    return this.monSubject.asObservable();
  }

  // public Stat methods
  setDvMax(value: number) {
    this.dvMax = value;
    this.currentDvs = value;
  }

  getCurrentDvs(): Observable<number> {
    return this.dvSubject.asObservable();
  }

  adjustStat(statName: string, value: number): void {
    if (this._monster) {

      let newTotal = this.currentDvs - value;
      if ((0 <= newTotal) && (newTotal <= this.dvMax)) {
        
        try {
          this._monster.getStat(statName).applyCharDv(value);
          this.currentDvs -= value;
        } catch(error) {
          console.log(error);
        }

      }
    }

  }
}
