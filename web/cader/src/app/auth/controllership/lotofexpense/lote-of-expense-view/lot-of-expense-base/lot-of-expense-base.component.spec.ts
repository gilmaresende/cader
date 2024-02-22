import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotOfExpenseBaseComponent } from './lot-of-expense-base.component';

describe('LotOfExpenseBaseComponent', () => {
  let component: LotOfExpenseBaseComponent;
  let fixture: ComponentFixture<LotOfExpenseBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotOfExpenseBaseComponent]
    });
    fixture = TestBed.createComponent(LotOfExpenseBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
