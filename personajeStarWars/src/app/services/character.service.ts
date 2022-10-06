import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

const API_BASE_URL = 'https://swapi.dev/api';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  public getCharacter(): Observable<Character> {
    return this.http.get<Character>(`${API_BASE_URL}/people/`);
  }
}
