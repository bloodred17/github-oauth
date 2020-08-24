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
    return this.http.post('https://github.com/login/oauth/access_token', {
      params: {
        client_id: '3da366587e2577cb7d0f',
        redirect_uri: 'https://github-oauth.netlify.app/auth',
        client_secret: '46238833d956a3705e61c2e6f15c19bf474e4d2d',
        code: '061d3283c2bd1381a8fd'
      }
    }).subscribe((data) => {
      console.log(data);
    });
  }
}
