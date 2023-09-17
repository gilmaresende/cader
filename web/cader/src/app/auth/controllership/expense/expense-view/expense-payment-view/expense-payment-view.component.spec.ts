import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensePaymentViewComponent } from './expense-payment-view.component';

describe('ExpensePaymentViewComponent', () => {
  let component: ExpensePaymentViewComponent;
  let fixture: ComponentFixture<ExpensePaymentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensePaymentViewComponent]
    });
    fixture = TestBed.createComponent(ExpensePaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
