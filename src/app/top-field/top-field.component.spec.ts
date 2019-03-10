import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFieldComponent } from './top-field.component';

describe('TopFieldComponent', () => {
  let component: TopFieldComponent;
  let fixture: ComponentFixture<TopFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
