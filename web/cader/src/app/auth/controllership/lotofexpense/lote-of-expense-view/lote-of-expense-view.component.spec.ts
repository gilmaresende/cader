import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteOfExpenseViewComponent } from './lote-of-expense-view.component';

describe('LoteOfExpenseViewComponent', () => {
  let component: LoteOfExpenseViewComponent;
  let fixture: ComponentFixture<LoteOfExpenseViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoteOfExpenseViewComponent]
    });
    fixture = TestBed.createComponent(LoteOfExpenseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
