import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  login: Login = {
    username: 'admin',
    password: '1234'
  };

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  ngOnInit(): void {
    console.log(this.auth.test().subscribe());
  }
}
