import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementFilterComponent } from './movement-filter.component';

describe('MovementFilterComponent', () => {
  let component: MovementFilterComponent;
  let fixture: ComponentFixture<MovementFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovementFilterComponent]
    });
    fixture = TestBed.createComponent(MovementFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
