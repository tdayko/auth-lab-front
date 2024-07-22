import { AuthResponse } from './../types/auth-response.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginService {
  apiUrl: string = "http://localhost:5278/auth-lab/api/auth";
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<AuthResponse>(this.apiUrl + "/login", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
      })
    );
  }

  signup(name: string, email: string, password: string) {
    return this.httpClient.post<AuthResponse>(this.apiUrl + "/register", { username: name, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
      })
    );
  }
}