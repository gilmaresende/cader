import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIQueryItemComponent } from './biquery-item.component';

describe('BIQueryItemComponent', () => {
  let component: BIQueryItemComponent;
  let fixture: ComponentFixture<BIQueryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BIQueryItemComponent]
    });
    fixture = TestBed.createComponent(BIQueryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
