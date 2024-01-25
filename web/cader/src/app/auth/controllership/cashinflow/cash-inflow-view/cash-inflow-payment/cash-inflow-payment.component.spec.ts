import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInflowPaymentComponent } from './cash-inflow-payment.component';

describe('CashInflowPaymentComponent', () => {
  let component: CashInflowPaymentComponent;
  let fixture: ComponentFixture<CashInflowPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashInflowPaymentComponent]
    });
    fixture = TestBed.createComponent(CashInflowPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
