import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ocupantes } from '../models/ocupantes.model';

const baseURL = 'http://localhost:8090/rest/ocupante';

@Injectable({
  providedIn: 'root'
})
export class OcupantesService {

  constructor(private http:HttpClient) { }

  consulta(filtro:string):Observable<Ocupantes[]>{
    if(filtro.trim() == ''){
      return this.http.get<Ocupantes[]>(baseURL+"/listaOcupantePorDNI/todos");
    }else{
      return this.http.get<Ocupantes[]>(baseURL+"/listaOcupantePorDNI/" + filtro);
    }
    
  }

  registra(aux:Ocupantes):Observable<any>{    
    return this.http.post<any>(baseURL+"/registrar", aux);
  }

  actualiza(aux:Ocupantes):Observable<any>{
    
    return this.http.put<any>(baseURL+"/actualizar", aux);
  }

  elimina(ocupantes:Ocupantes){
    return this.http.delete<Ocupantes>(baseURL+"/"+ocupantes.idOcupante);
  }

}
