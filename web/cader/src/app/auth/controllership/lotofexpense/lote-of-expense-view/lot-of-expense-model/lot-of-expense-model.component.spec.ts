import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotOfExpenseModelComponent } from './lot-of-expense-model.component';

describe('LotOfExpenseModelComponent', () => {
  let component: LotOfExpenseModelComponent;
  let fixture: ComponentFixture<LotOfExpenseModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotOfExpenseModelComponent]
    });
    fixture = TestBed.createComponent(LotOfExpenseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
