<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
>>>>>>> 841a5a2fcbdc8ce3fe4a97910d8e3c10de8423bc

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class AuthService {}
=======
export class AuthService {
private baseUrl = '';



  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }
  





}
>>>>>>> 841a5a2fcbdc8ce3fe4a97910d8e3c10de8423bc
//todo: Complete missing code..