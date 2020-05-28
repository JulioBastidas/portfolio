import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiganCheeseComponent } from './digan-cheese.component';

describe('DiganCheeseComponent', () => {
  let component: DiganCheeseComponent;
  let fixture: ComponentFixture<DiganCheeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiganCheeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiganCheeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
