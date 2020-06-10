import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsRailingComponent } from './steps-railing.component';

describe('StepsRailingComponent', () => {
  let component: StepsRailingComponent;
  let fixture: ComponentFixture<StepsRailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsRailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsRailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
