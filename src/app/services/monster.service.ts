import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private apiUrl: String = 'http://localhost:5000/monster/';
  private subject: Subject<Monster> = new Subject<Monster>();;

  constructor(private http: HttpClient) {}

  setMonster(mon: Monster): void {
    console.log(mon);
    this.subject.next(mon);
  }

  getMonster(): Observable<Monster> {
    return this.subject.asObservable();
  }

  getMonFromApi(id: number): Observable<Monster> {
    return this.http.get<Monster>(`${this.apiUrl}?species=${id}`).pipe(
      map(data => {
        let mon = new Monster(data);
        this.setMonster(mon);
        return mon;
      })
    );
  }
}
