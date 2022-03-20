import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  getUsers<T>():Observable<T>{
    return this.http.get<T>("http://localhost:3000/user").pipe();
  }
  registerUser<T>(req:any):Observable<T>{
    return this.http.post<T>("http://localhost:3000/user",req).pipe();
  }
}
