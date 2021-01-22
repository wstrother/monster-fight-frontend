import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { Specie } from '../models/specie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MonApiService {
  private baseApiUrl: String = 'http://localhost:5000/';
  private speciesEnd: string = 'species/';
  private monsterEnd: string = 'monster/';
  private newCharEnd: string = 'new_character/';

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

  getNewCharData(): any {
    return this.http.get<any>(this.getNewCharUrl()).pipe(
      map(data => data)
    );
  }

  constructor(private http: HttpClient) { }
}
