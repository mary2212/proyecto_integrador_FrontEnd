import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visita } from '../models/visita.model';

const baseUrl = 'http://localhost:8090/rest/visita'


@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private http:HttpClient) { }

  consulta(filtro:string):Observable<Visita[]>{
    if(filtro.trim() == ''){
      return this.http.get<Visita[]>(baseUrl+"/listaVisitaPorID/")
    }else{
      return this.http.get<Visita[]>(baseUrl+"/listaVisitaPorID/" + filtro)
    }
  }

  registra(aux:Visita): Observable<any>{
    return this.http.post<any>(baseUrl+"/registrar", aux);
  }



}
