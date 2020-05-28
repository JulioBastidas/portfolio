import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendprojectsComponent } from './frontendprojects.component';

describe('FrontendprojectsComponent', () => {
  let component: FrontendprojectsComponent;
  let fixture: ComponentFixture<FrontendprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
