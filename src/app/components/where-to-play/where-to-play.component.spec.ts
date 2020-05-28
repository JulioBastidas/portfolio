import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToPlayComponent } from './where-to-play.component';

describe('WhereToPlayComponent', () => {
  let component: WhereToPlayComponent;
  let fixture: ComponentFixture<WhereToPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereToPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereToPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
