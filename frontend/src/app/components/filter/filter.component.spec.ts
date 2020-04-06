import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterService } from './services/filter.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Personagem } from './models/Personagem';
import { Observable } from 'rxjs';


describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ FilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('onSearch com sucesso', () => {
     component.filtro = 'Hulk';
     component.filterService.getPersonagem(component.filtro).then(
      response => {
      const personagem = new Personagem();
      expect(component.personagem.Nome).toBe('Hulk');
      }
     );
  });
});
