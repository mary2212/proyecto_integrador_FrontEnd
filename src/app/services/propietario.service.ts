import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propietario } from '../models/propietario.model';

const baseUrl = 'http://localhost:8090/rest/propietario'

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private http:HttpClient) { }

  consulta(filtro:string):Observable<Propietario[]>{
    if(filtro.trim() == ''){
      return this.http.get<Propietario[]>(baseUrl+"/listaPropietarioPorNombre/todos")
    }else{
      return this.http.get<Propietario[]>(baseUrl+"/listaPropietarioPorNombre/" + filtro)
    }
   
  }

  registra(aux:Propietario): Observable<any>{
    return this.http.post<any>(baseUrl+"/registrar", aux);
  }

  actualiza(aux:Propietario): Observable<any>{
    return this.http.put<any>(baseUrl+"/actualizar", aux);
  }

  elimina(Propietario:Propietario){
    return this.http.delete<Propietario>(baseUrl+"/"+Propietario.idPropietario);
  }

}
