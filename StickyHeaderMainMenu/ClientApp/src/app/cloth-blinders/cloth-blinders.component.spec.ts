import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothBlindersComponent } from './cloth-blinders.component';

describe('ClothBlindersComponent', () => {
  let component: ClothBlindersComponent;
  let fixture: ComponentFixture<ClothBlindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothBlindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothBlindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
