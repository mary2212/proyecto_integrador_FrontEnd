import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incidente } from '../models/incidente.model';

const baseUrl = 'http://localhost:8090/rest/incidente'

@Injectable({
  providedIn: 'root'
})
export class IncidenteService {

  constructor(private http:HttpClient) { }

  consulta(filtro:string):Observable<Incidente[]>{
    if(filtro.trim() == ''){
      return this.http.get<Incidente[]>(baseUrl+"/listaIncidentePorDescripcion/todos")
    }else{
      return this.http.get<Incidente[]>(baseUrl+"/listaIncidentePorDescripcion/" + filtro)
    }
   
  }

  listaIncidente(idEdificio:number, idDepartamento:number, estado:number):Observable<any>{
    const params = new HttpParams().set("idEdificio",idEdificio).set("idDepartamento",idDepartamento).set("estado",estado);
    return this.http.get<any>(baseUrl + "/listaIncidenteConParametros", {params});
  }

  registra(aux:Incidente): Observable<any>{
    return this.http.post<any>(baseUrl+"/registrar", aux);
  }

  actualiza(aux:Incidente): Observable<any>{
    return this.http.put<any>(baseUrl+"/actualizar", aux);
  }

  elimina(incidente:Incidente){
    return this.http.delete<Incidente>(baseUrl+"/"+incidente.idIncidente);
  }

}
