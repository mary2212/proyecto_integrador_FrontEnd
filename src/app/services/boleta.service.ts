import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleta } from '../models/boleta.model';

const baseUrl = 'http://localhost:8090/rest/boleta'

@Injectable({
  providedIn: 'root'
})
export class BoletaService {

  constructor(private http:HttpClient) { }

  listaBoleta():Observable<Boleta[]>{
    return this.http.get<Boleta[]>(baseUrl+"/listar")
  }

  consulta(filtro:string): Observable<Boleta[]>{
    if(filtro.trim() == ''){
      return this.http.get<Boleta[]>(baseUrl+"/listaBoletaPorEstado/todos")
    }else{
      return this.http.get<Boleta[]>(baseUrl+"/listaBoletaPorEstado/" + filtro)
    }
  }

  registra(aux:Boleta): Observable<any>{
    return this.http.post<any>(baseUrl+"/registrar", aux);
  }

  actualiza(aux:Boleta): Observable<any>{
    return this.http.put<any>(baseUrl+"/actualizar", aux);
  }
}
