import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DietaData } from './dieta-data'

@Injectable({
  providedIn: 'root',
})
export class DietaService {
  constructor(private http: HttpClient) {}

  getObjectivos(): Observable<DietaData> {
    return this.http.get<DietaData>('../../assets/Json/dietas.Json');
  }

}
