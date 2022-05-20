import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseURL="http://localhost:8090/user/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user:User): Observable<object>{
    console.log(user)    
    return this.httpClient.post(`${this.baseURL}`,user);
  }

}
