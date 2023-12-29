import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBiComponent } from './list-bi.component';

describe('ListBiComponent', () => {
  let component: ListBiComponent;
  let fixture: ComponentFixture<ListBiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBiComponent]
    });
    fixture = TestBed.createComponent(ListBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
