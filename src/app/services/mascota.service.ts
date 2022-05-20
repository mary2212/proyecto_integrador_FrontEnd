import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';

const baseUrl = 'http://localhost:8090/rest/mascota'

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }

  
  consulta(filtro:string):Observable<Mascota[]>{
    if(filtro.trim() == ''){
      return this.http.get<Mascota[]>(baseUrl+"/listaMascotaPorDescripcion/todos")
    }else{
      return this.http.get<Mascota[]>(baseUrl+"/listaMascotaPorDescripcion/" + filtro)
    }
   
  }

  registra(aux:Mascota): Observable<any>{
    return this.http.post<any>(baseUrl+"/registrar", aux);
  }

  actualiza(aux:Mascota): Observable<any>{
    return this.http.put<any>(baseUrl+"/actualizar", aux);
  }

  elimina(departamento:Mascota){
    return this.http.delete<Mascota>(baseUrl+"/"+departamento.idMascota);
  }

}
