
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio } from '../models/edificio.model';
;

const baseURL = 'http://localhost:8090/rest/edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  
  constructor(private http:HttpClient){} 

  listaEdificio():Observable<Edificio[]>{
    return this.http.get<Edificio[]>(baseURL+"/listar")
  }

  consulta(filtro:string):Observable<Edificio[]>{
    if(filtro.trim() == ''){
      return this.http.get<Edificio[]>(baseURL+"/listaEdificioPorNombre/todos");
    }else{
      return this.http.get<Edificio[]>(baseURL+"/listaEdificioPorNombre/" + filtro);
    }
    
  }

  registra(aux:Edificio):Observable<any>{    
    return this.http.post<any>(baseURL+"/registrar", aux);
  }

  actualiza(aux:Edificio):Observable<any>{
    
    return this.http.put<any>(baseURL+"/actualizar", aux);
  }

  elimina(edificio:Edificio){
    return this.http.delete<Edificio>(baseURL+"/"+edificio.idEdificio);
  }

}


