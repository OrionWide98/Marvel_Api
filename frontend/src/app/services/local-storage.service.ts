import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor( @Inject(LOCAL_STORAGE) private storage: StorageService ) { }

  public setOnLocalStorage(key: string, personagem: any): void {
    this.storage.set(key, personagem);
  }

  public getOnLocalStorage(key: string): any {
    return this.storage.get(key);
  }

  public removeOnLocalStorage(key: string): void {
    this.storage.remove(key);
  }
}
