import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharCreatorService {
  // private subject: Subject<Monster> = new Subject<Monster>();
  private subjectMsg: BehaviorSubject<string> = new BehaviorSubject<string>("first message");

  constructor() { }

  // setMonster(mon: Monster): void {
  //   console.log("setMonster()");
  //   console.log(mon);
  //   this.subject.next(mon);
  // }

  // getCurrentMon(): Observable<Monster> {
  //   return this.subject.asObservable();
  // }

  sendMessage(msg: string) {
    this.subjectMsg.next(msg);
  }

  getMessage(): Observable<string> {
    return this.subjectMsg.asObservable();
  }
}
