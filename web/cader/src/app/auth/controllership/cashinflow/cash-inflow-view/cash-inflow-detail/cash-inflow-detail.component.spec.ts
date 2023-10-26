import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInflowDetailComponent } from './cash-inflow-detail.component';

describe('CashInflowDetailComponent', () => {
  let component: CashInflowDetailComponent;
  let fixture: ComponentFixture<CashInflowDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashInflowDetailComponent]
    });
    fixture = TestBed.createComponent(CashInflowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
