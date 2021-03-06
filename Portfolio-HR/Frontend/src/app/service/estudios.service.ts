import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/estudios.model';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  URL = 'http://localhost:8080/educaciones/'

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.URL + 'traer');
  }
}