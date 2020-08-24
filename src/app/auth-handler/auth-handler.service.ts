import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthHandlerService {

  constructor(private http: HttpClient) { }

  auth() {
    return this.http.get('https://github.com/login/oauth/authorize', {
      params: {
        client_id: '3da366587e2577cb7d0f',
        redirect_uri: 'https://github-oauth.netlify.app/auth'
      }
    }).subscribe((data) => {
      console.log(data);
    });
  }
}
