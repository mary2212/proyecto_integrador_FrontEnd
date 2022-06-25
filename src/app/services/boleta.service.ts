import { HttpClient, HttpParams } from '@angular/common/http';
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

  listaBoletaParametros(estado:string, idServicio:number, idPropietario:number): Observable<any>{
    const params = new HttpParams().set("estado",estado).set("idServicio",idServicio).set("idPropietario",idPropietario);
    return this.http.get<any>(baseUrl+"/listaBoletaEstadoServicioProp" ,{params})
  }
}
