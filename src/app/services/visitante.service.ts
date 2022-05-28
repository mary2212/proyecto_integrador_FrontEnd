import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitante } from '../models/visitante.model';

const baseURL = 'http://localhost:8090/rest/visitante';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http:HttpClient) { }

  listaVisitante():Observable<Visitante[]>{
    return this.http.get<Visitante[]>(baseURL+"/listar")
  }
}
