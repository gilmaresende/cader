import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCategoryListComponent } from './income-category-list.component';

describe('IncomeCategoryListComponent', () => {
  let component: IncomeCategoryListComponent;
  let fixture: ComponentFixture<IncomeCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeCategoryListComponent]
    });
    fixture = TestBed.createComponent(IncomeCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
