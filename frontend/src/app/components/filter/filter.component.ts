import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { FilterService } from './services/filter.service';
import { Personagem } from './models/Personagem';
import {Router} from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  personagens: Personagem[];
  personagem: Personagem;
  filtro: string;
  status: boolean;

  ngOnInit(): void {
    if (this.localStorageService.getOnLocalStorage('userLogged') !== true) {
      alert('Você deve logar primeiro');
      this.router.navigate(['login']);
     }
   }

  constructor(
    public filterService: FilterService,
    public router: Router,
    public localStorageService: LocalStorageService) { }

  public onSearch() {
    this.filterService.getPersonagem(this.filtro).then((result) => {
      this.personagens = result;
      this.status = true;
      if (!this.personagens.values()) {
        this.status = false;
      }
    }).catch(() => {
      this.status = false;
      alert('Personagem não encontrado, tente novamente');
    });
  }

  public logOut() {
    this.localStorageService.removeOnLocalStorage('userLogged');
    this.router.navigate(['']);
  }

  public storeData(personagem: Personagem) {
    this.localStorageService.setOnLocalStorage('local_personagem', personagem);
  }

  public onPress() {
    if (this.status === false) {
      alert('Personagem não encontrado');
    } else {
      this.router.navigate(['details']);
    }
  }
}
