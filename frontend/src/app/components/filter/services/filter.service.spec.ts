import { StorageService } from 'ngx-webstorage-service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FilterService } from './filter.service';
import { Personagem } from '../models/Personagem';

describe('FilterService', () => {
  let service: FilterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        [HttpClientModule],
        RouterTestingModule
      ],
    });
    service = TestBed.inject(FilterService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    service = TestBed.inject(FilterService);
    expect(service).toBeTruthy();
  });

  it('getPosicao com sucesso', fakeAsync(
    inject([FilterService, HttpTestingController],
    (
      filterService: FilterService,
      api: HttpTestingController
     ) => {

    filterService.getPersonagem('Spider-Man').then((result) => {
      console.log(result);
      expect(result.Nome).toBe('Spider-Man');
    });

    const mock = new Personagem();
    mock.Nome = 'Spider-Man';

    const response = api.expectOne('https://localhost:5001/PostApiToDatabase?nome=Spider-Man');
    response.flush(mock);
    // ta dificil kkk
    }
    )));
});
