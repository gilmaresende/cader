import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInvoiceLaunchComponent } from './card-invoice-launch.component';

describe('CardInvoiceLaunchComponent', () => {
  let component: CardInvoiceLaunchComponent;
  let fixture: ComponentFixture<CardInvoiceLaunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInvoiceLaunchComponent]
    });
    fixture = TestBed.createComponent(CardInvoiceLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
