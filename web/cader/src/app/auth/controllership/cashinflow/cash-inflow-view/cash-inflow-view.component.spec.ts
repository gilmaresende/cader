import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInflowViewComponent } from './cash-inflow-view.component';

describe('CashInflowViewComponent', () => {
  let component: CashInflowViewComponent;
  let fixture: ComponentFixture<CashInflowViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashInflowViewComponent]
    });
    fixture = TestBed.createComponent(CashInflowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
