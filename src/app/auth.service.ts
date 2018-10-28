import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = 'http://localhost/api/login';

  constructor(private http: HttpClient) {
  }

  public login(login: Login): Observable<any> {
    return this.http.post<any>(this.loginUrl, login)
      .pipe(
        map(result => {
          localStorage.setItem('token', result.token);
        })
      );
  }

  public test(): Observable<any> {
    return console.log(this.http.get('http://localhost/api/test'));
  }
}
