import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharCreatorService {
  private subject: Subject<Monster> = new Subject<Monster>();

  constructor() { }

  setMonster(mon: Monster): void {
    console.log("setMonster()");
    console.log(mon);
    console.log(mon.life);
    this.subject.next(mon);
  }

  getCurrentMon(): Observable<Monster> {
    return this.subject.asObservable();
  }
}
