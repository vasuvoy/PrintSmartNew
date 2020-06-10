import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyPrintingComponent } from './trophy-printing.component';

describe('TrophyPrintingComponent', () => {
  let component: TrophyPrintingComponent;
  let fixture: ComponentFixture<TrophyPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophyPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophyPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
