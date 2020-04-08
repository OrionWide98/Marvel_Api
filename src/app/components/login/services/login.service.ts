import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( @Inject(LOCAL_STORAGE) private storage: StorageService ) { }

  public storeOnLocalStorage(status: boolean): void {
    this.storage.set('userLogged', status);
  }

  Auth(username: string, password: string): boolean {
    if (username === 'admin' && password === '123456') {
      this.storeOnLocalStorage(true);
      return true;
    } else {
      this.storeOnLocalStorage(false);
      return false;
    }
  }
}
