import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInvoiceViewComponent } from './card-invoice-view.component';

describe('CardInvoiceViewComponent', () => {
  let component: CardInvoiceViewComponent;
  let fixture: ComponentFixture<CardInvoiceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInvoiceViewComponent]
    });
    fixture = TestBed.createComponent(CardInvoiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
