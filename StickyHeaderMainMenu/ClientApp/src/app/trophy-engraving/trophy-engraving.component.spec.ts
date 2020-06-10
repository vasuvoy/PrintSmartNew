import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyEngravingComponent } from './trophy-engraving.component';

describe('TrophyEngravingComponent', () => {
  let component: TrophyEngravingComponent;
  let fixture: ComponentFixture<TrophyEngravingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophyEngravingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophyEngravingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
