import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteOfExpenseFilterComponent } from './lote-of-expense-filter.component';

describe('LoteOfExpenseFilterComponent', () => {
  let component: LoteOfExpenseFilterComponent;
  let fixture: ComponentFixture<LoteOfExpenseFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoteOfExpenseFilterComponent]
    });
    fixture = TestBed.createComponent(LoteOfExpenseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
