import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypeViewComponent } from './payment-type-view.component';

describe('PaymentTypeViewComponent', () => {
  let component: PaymentTypeViewComponent;
  let fixture: ComponentFixture<PaymentTypeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentTypeViewComponent]
    });
    fixture = TestBed.createComponent(PaymentTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
