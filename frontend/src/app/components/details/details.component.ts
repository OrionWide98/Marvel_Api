import { Component, OnInit, Inject } from '@angular/core';
import { Personagem } from '../filter/models/Personagem';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  personagem = new Personagem();
  constructor(
    public router: Router,
    public localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    if (this.localStorageService.getOnLocalStorage('userLogged') !== true) {
      alert('Você não está logado');
      this.router.navigate(['']);
    }
    this.personagem.Nome = this.localStorageService.getOnLocalStorage('local_personagem').nome;
    this.personagem.Descricao = this.localStorageService.getOnLocalStorage('local_personagem').descricao;
    this.personagem.UrlImagem = this.localStorageService.getOnLocalStorage('local_personagem').urlImagem;
    this.personagem.UrlWiki = this.localStorageService.getOnLocalStorage('local_personagem').urlWiki;
  }

  public back() {
    this.router.navigate(['filter']);
  }

  public logOut() {
    this.localStorageService.removeOnLocalStorage('userLogged');
    this.router.navigate(['']);
  }


}
