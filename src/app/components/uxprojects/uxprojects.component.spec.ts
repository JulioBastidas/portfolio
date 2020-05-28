import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxprojectsComponent } from './uxprojects.component';

describe('UxprojectsComponent', () => {
  let component: UxprojectsComponent;
  let fixture: ComponentFixture<UxprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
