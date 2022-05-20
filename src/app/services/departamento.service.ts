import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento.model';

const baseUrl = 'http://localhost:8090/rest/departamento'

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }

  listaDepartamento():Observable<Departamento[]>{
    return this.http.get<Departamento[]>(baseUrl+"/listar")
  }
  consulta(filtro:string):Observable<Departamento[]>{
    if(filtro.trim() == ''){
      return this.http.get<Departamento[]>(baseUrl+"/listaDepartamentoPorEstado/todos")
    }else{
      return this.http.get<Departamento[]>(baseUrl+"/listaDepartamentoPorEstado/" + filtro)
    }
   
  }

  registra(aux:Departamento): Observable<any>{
    return this.http.post<any>(baseUrl+"/registrar", aux);
  }

  actualiza(aux:Departamento): Observable<any>{
    return this.http.put<any>(baseUrl+"/actualizar", aux);
  }

  elimina(departamento:Departamento){
    return this.http.delete<Departamento>(baseUrl+"/"+departamento.idDepartamento);
  }

}
