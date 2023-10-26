import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInflowFilterComponent } from './cash-inflow-filter.component';

describe('CashInflowFilterComponent', () => {
  let component: CashInflowFilterComponent;
  let fixture: ComponentFixture<CashInflowFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashInflowFilterComponent]
    });
    fixture = TestBed.createComponent(CashInflowFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
