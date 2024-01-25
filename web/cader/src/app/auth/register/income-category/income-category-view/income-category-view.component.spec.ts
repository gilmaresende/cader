import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCategoryViewComponent } from './income-category-view.component';

describe('IncomeCategoryViewComponent', () => {
  let component: IncomeCategoryViewComponent;
  let fixture: ComponentFixture<IncomeCategoryViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeCategoryViewComponent]
    });
    fixture = TestBed.createComponent(IncomeCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
