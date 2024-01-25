import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInflowListComponent } from './cash-inflow-list.component';

describe('CashInflowListComponent', () => {
  let component: CashInflowListComponent;
  let fixture: ComponentFixture<CashInflowListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashInflowListComponent]
    });
    fixture = TestBed.createComponent(CashInflowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
