import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteOfExpenseListComponent } from './lote-of-expense-list.component';

describe('LoteOfExpenseListComponent', () => {
  let component: LoteOfExpenseListComponent;
  let fixture: ComponentFixture<LoteOfExpenseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoteOfExpenseListComponent]
    });
    fixture = TestBed.createComponent(LoteOfExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
