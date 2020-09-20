import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingCardsComponent } from './visiting-cards.component';

describe('VisitingCardsComponent', () => {
  let component: VisitingCardsComponent;
  let fixture: ComponentFixture<VisitingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
