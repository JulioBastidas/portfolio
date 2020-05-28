import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlzgamerComponent } from './alzgamer.component';

describe('AlzgamerComponent', () => {
  let component: AlzgamerComponent;
  let fixture: ComponentFixture<AlzgamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlzgamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlzgamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
