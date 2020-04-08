import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from './services/login.service';
import { User } from './models/User';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  status: boolean;
  user: User = {
    UserName: '',
    Password: '',
  };

  constructor(
    private loginService: LoginService,
    public router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {
    if (this.storage.get('userLogged') === true) {
     alert('Você está logado');
     this.router.navigate(['filter']);
    }
  }

  OnPress() {
    this.status = this.loginService.Auth(this.user.UserName, this.user.Password);
    if (this.status === true) {
      this.router.navigate(['filter']);
    } else {
      alert('Usuario ou senha errado(s)');
    }
  }
}
