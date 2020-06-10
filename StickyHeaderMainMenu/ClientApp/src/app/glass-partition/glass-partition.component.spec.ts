import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassPartitionComponent } from './glass-partition.component';

describe('GlassPartitionComponent', () => {
  let component: GlassPartitionComponent;
  let fixture: ComponentFixture<GlassPartitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassPartitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassPartitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
