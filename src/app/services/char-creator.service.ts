import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Move } from '../models/move';
import { MovePool } from '../models/move-pool';


@Injectable({
  providedIn: 'root'
})
export class CharCreatorService {
  private _monster?: Monster;
  private monSubject: Subject<Monster> = new Subject<Monster>();

  private _dvs: number = 0;
  private dvMax: number = 0;
  private dvSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private _moves: Move[] = [];
  private _specMoveIndex: number = 0;
  private moveSubject: Subject<Move[]> = new Subject<Move[]>();
  private movePool?: MovePool | undefined;


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

  getMonster(): Monster | undefined {
    return this._monster;
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

  // public Move methods
  addMove(move: Move) {
    this._moves.push(move);
  }

  setSpecMoves(moves: Move[]) {
    this._specMoveIndex = moves.length;
    moves.forEach((m: Move) => this.addMove(m));
  }

  handleMoveSlot(move: Move, slot: number) {
    let index = this._specMoveIndex + (slot - 1);
    this._moves[index] = move;

    console.log(this._moves);
  }

  getMoveList(): Move[] {
    return this._moves;
  }

  getCurrentMoves(): Observable<Move[]> {
    return this.moveSubject.asObservable();
  }

  setMovePool(pool: MovePool) {
    this.movePool = pool;
  }

  getMovePool(): MovePool | undefined {
    return this.movePool;
  }
}
