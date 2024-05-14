import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor(private http: HttpClient) {}

  getObjectivos(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/Json/treinos.Json');
  }
}
