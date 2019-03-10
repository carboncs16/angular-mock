import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalLineDetailsComponent } from './additional-line-details.component';

describe('AdditionalLineDetailsComponent', () => {
  let component: AdditionalLineDetailsComponent;
  let fixture: ComponentFixture<AdditionalLineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalLineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalLineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
