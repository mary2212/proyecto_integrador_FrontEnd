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

  consulta(filtro:string):Observable<Visitante[]>{
    if(filtro.trim() == ''){
      return this.http.get<Visitante[]>(baseURL+"/listaVisitantePorDNI/todos")
    }else{
      return this.http.get<Visitante[]>(baseURL+"/listaVisitantePorDNI/" + filtro)
    }
   
  }
 
  registra(aux:Visitante): Observable<any>{
    return this.http.post<any>(baseURL+"/registrar", aux);
  }

  actualiza(aux:Visitante): Observable<any>{
    return this.http.put<any>(baseURL+"/actualizar", aux);
  }

  elimina(visitante:Visitante){
    return this.http.delete<Visitante>(baseURL+"/"+visitante.idVisitante);
  }


}
