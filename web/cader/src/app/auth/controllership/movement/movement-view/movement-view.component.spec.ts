import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementViewComponent } from './movement-view.component';

describe('MovementViewComponent', () => {
  let component: MovementViewComponent;
  let fixture: ComponentFixture<MovementViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovementViewComponent]
    });
    fixture = TestBed.createComponent(MovementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
