import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from './services/login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [LoginComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login efetuado com Sucesso', () => {
    spyOn(fixture.componentInstance.router, 'navigate');

    component.user.UserName = 'admin';
    component.user.Password = '123456';
    component.OnPress();
    expect(component.status).toBeTruthy();
    expect(component.router.navigate).toHaveBeenCalledWith(['filter']);
  });

  it('Login efetuado com erro', () => {
    component.user.UserName = 'usuario';
    component.user.Password = 'senha';
    component.OnPress();
    expect(component.status).toBeFalsy();
  });
});
