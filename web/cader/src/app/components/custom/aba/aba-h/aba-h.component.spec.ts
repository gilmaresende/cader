import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaHComponent } from './aba-h.component';

describe('AbaHComponent', () => {
  let component: AbaHComponent;
  let fixture: ComponentFixture<AbaHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbaHComponent]
    });
    fixture = TestBed.createComponent(AbaHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
