import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = 'http://localhost/api/login';
  private api = 'http://localhost/api';

  constructor(private http: HttpClient) {
  }

  public login(login: Login): Observable<any> {
    return this.http.post<any>(this.api + '/login', login)
      .pipe(
        map(result => {
          localStorage.setItem('token', result.token);
        })
      );
  }

  public test(): Observable<any> {
    return this.http.get(this.api + '/test');
  }

  public getUnternehmen(): Observable<any> {
    return this.http.get(this.api + '/auth/tools/unternehmen');
  }
}
