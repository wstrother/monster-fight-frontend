import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Monster } from '../models/monster';
import { Specie } from '../models/specie';
import { Move } from '../models/move';
import { MovePool } from '../models/move-pool';


@Injectable({
  providedIn: 'root'
})
export class MonApiService {
  private baseApiUrl: String = 'http://localhost:5000/';
  private speciesEnd: string = 'species';
  private monsterEnd: string = 'monster';
  private newCharEnd: string = 'new_character';
  private movesEnd: string = 'moves';
  
  constructor(private http: HttpClient) { }

  // API methods

  // methods for the 'getSpeciesList' API call
  getSpeciesListUrl(): string {
    return `${this.baseApiUrl}${this.speciesEnd}`;
  }

  getSpeciesList(): Observable<Specie[]> {
    return this.http.get<Specie[]>(this.getSpeciesListUrl()).pipe(
      map(data => data.map(data => new Specie(data)))
    );
  }

  // methods for the 'getMonster' API call
  getMonsterUrl(id: number): string {
    return `${this.baseApiUrl}${this.monsterEnd}?species=${id}`;
  }

  getMonster(id: number): Observable<Monster> {
    return this.http.get<Monster>(this.getMonsterUrl(id)).pipe(
      map(data => new Monster(data))
    );
  }

  // methods for the 'newCharacter' API call
  getNewCharUrl(): string {
    return `${this.baseApiUrl}${this.newCharEnd}`;
  }

  getNewCharData(): Observable<any> {
    return this.http.get<any>(this.getNewCharUrl()).pipe(
      map(data => data)
    );
  }

  getMovePool(id: number): Observable<MovePool> {
    let url = `${this.getNewCharUrl()}?move_pool=${id}`;
    return this.http.get<any>(url).pipe(
      map(data => {
        return new MovePool(data)
      })
    );
  }

  // methods for the 'moves' API call
  getMovesUrl(id: number): string {
    return `${this.baseApiUrl}${this.movesEnd}?species=${id}`;
  }

  getSpeciesMoves(id: number): Observable<Move[]> {
    return this.http.get<Move[]>(this.getMovesUrl(id)).pipe(
      map(data => data.map(data => new Move(data)))
    );
  }
}
