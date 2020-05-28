import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienEstaDetrasDeLaPantallaComponent } from './quien-esta-detras-de-la-pantalla.component';

describe('QuienEstaDetrasDeLaPantallaComponent', () => {
  let component: QuienEstaDetrasDeLaPantallaComponent;
  let fixture: ComponentFixture<QuienEstaDetrasDeLaPantallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienEstaDetrasDeLaPantallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienEstaDetrasDeLaPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
