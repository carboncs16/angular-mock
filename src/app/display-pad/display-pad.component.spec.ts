import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPadComponent } from './display-pad.component';

describe('DisplayPadComponent', () => {
  let component: DisplayPadComponent;
  let fixture: ComponentFixture<DisplayPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
