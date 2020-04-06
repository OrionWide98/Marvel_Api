export class Personagem {
  private nome: string;
  private descricao: string;
  private urlImagem: string;
  private urlWiki: string;


  public get Nome(): string {
    return this.nome;
  }
  public set Nome(value: string) {
    this.nome = value;
  }

  public get Descricao(): string {
    return this.descricao;
  }
  public set Descricao(value: string) {
    this.descricao = value;
  }

  public get UrlImagem(): string {
    return this.urlImagem;
  }
  public set UrlImagem(value: string) {
    this.urlImagem = value;
  }

  public get UrlWiki(): string {
    return this.urlWiki;
  }
  public set UrlWiki(value: string) {
    this.urlWiki = value;
  }
}
