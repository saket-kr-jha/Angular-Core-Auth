import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOKEN_KEY } from '../constants';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // baseUrl = 'http://localhost:5076/api';

  createUser(formData: any) {
    return this.http.post(environment.apiBaseUrl + '/signup', formData);
  }
  loginUser(formData: any) {
    return this.http.post(environment.apiBaseUrl + '/signin', formData);
  }

  isLoggedIn() {
    return this.getToken() != null ? true : false;
  }
  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
  getClaims(){
    console.log(JSON.parse(window.atob(this.getToken()!.split('.')[1])));
    return JSON.parse(window.atob(this.getToken()!.split('.')[1]));
  }
}
