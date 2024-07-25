import { LoginRequest } from './../types/login-request.type';
import { SignupRequest } from '../types/signup-request.type';
import { AuthResponse } from './../types/auth-response.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginService {
  apiUrl: string = "http://localhost:5278/auth-lab/api/auth";
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    let loginRequest: LoginRequest = { email, password };
    return this.httpClient.post<AuthResponse>(this.apiUrl + "/login", loginRequest).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
      })
    );
  }

  signup(name: string, email: string, password: string) {
    let signupRequest: SignupRequest = { username: name, email, password };
    return this.httpClient.post<AuthResponse>(this.apiUrl + "/register", signupRequest).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
      })
    );
  }
}