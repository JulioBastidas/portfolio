import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuBancoIdealComponent } from './tu-banco-ideal.component';

describe('TuBancoIdealComponent', () => {
  let component: TuBancoIdealComponent;
  let fixture: ComponentFixture<TuBancoIdealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuBancoIdealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuBancoIdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
