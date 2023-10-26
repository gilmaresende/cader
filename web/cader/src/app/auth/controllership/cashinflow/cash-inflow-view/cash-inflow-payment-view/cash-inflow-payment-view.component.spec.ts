import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInflowPaymentViewComponent } from './cash-inflow-payment-view.component';

describe('CashInflowPaymentViewComponent', () => {
  let component: CashInflowPaymentViewComponent;
  let fixture: ComponentFixture<CashInflowPaymentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashInflowPaymentViewComponent]
    });
    fixture = TestBed.createComponent(CashInflowPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
