import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInvoiceListComponent } from './card-invoice-list.component';

describe('CardInvoiceListComponent', () => {
  let component: CardInvoiceListComponent;
  let fixture: ComponentFixture<CardInvoiceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInvoiceListComponent]
    });
    fixture = TestBed.createComponent(CardInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
