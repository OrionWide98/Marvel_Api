import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Personagem } from '../models/Personagem';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public getPersonagem(filtro: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const url = 'https://localhost:5001/PostApiToDatabase';

      this.http.get<Personagem>(`${url}?nome=${filtro}`)
        .subscribe((personagemApi) => {
          resolve(this.parsePersonagem(personagemApi));
        }, (error) => {reject(error); });
    });
  }

  private parsePersonagem(personagemApi: any): any {
    const personagens: Personagem[] = [];

    if (personagemApi[0] === undefined) {
      return undefined;
    } else {
      personagemApi.forEach(element => {
      const personagem = new Personagem();
      personagem.Nome = element?.nome;
      personagem.Descricao = element?.descricao;
      personagem.UrlImagem = element?.urlImagem;
      personagem.UrlWiki = element?.urlWiki;
      personagens.push(personagem);
      });
    }
    return personagens;
  }

  constructor(
    public http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService ) { }
}
