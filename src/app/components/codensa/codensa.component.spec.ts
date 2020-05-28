import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodensaComponent } from './codensa.component';

describe('CodensaComponent', () => {
  let component: CodensaComponent;
  let fixture: ComponentFixture<CodensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
