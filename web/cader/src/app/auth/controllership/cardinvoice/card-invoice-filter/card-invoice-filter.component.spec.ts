import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInvoiceFilterComponent } from './card-invoice-filter.component';

describe('CardInvoiceFilterComponent', () => {
  let component: CardInvoiceFilterComponent;
  let fixture: ComponentFixture<CardInvoiceFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInvoiceFilterComponent]
    });
    fixture = TestBed.createComponent(CardInvoiceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
