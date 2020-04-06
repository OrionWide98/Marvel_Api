import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('back', () => {
    spyOn(component.router, 'navigate');
    component.router.navigate(['filter']);
    expect(component.router.navigate).toHaveBeenCalledWith(['filter']);
  });

  it('logOut', () => {
    spyOn(component.router, 'navigate');
    component.router.navigate(['']);
    expect(component.router.navigate).toHaveBeenCalledWith(['']);
  });
});
