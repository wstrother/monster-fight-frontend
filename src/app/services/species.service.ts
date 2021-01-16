import { Injectable } from '@angular/core';
import { Specie } from '../models/specie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private apiUrl:String = 'http://localhost:5000/';
  private speciesListUrl:String = 'species/all/';

  constructor(private http:HttpClient) { }

  getSpeciesList(): Observable<Specie[]> {
    return this.http.get<Specie[]>(`${this.apiUrl}${this.speciesListUrl}`).pipe(
      map(data => data.map(data => new Specie(data)))
    );
  }
  
};
