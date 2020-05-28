import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuellasComponent } from './huellas.component';

describe('HuellasComponent', () => {
  let component: HuellasComponent;
  let fixture: ComponentFixture<HuellasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuellasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
