import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIParameterItemComponent } from './biparameter-item.component';

describe('BIParameterItemComponent', () => {
  let component: BIParameterItemComponent;
  let fixture: ComponentFixture<BIParameterItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BIParameterItemComponent]
    });
    fixture = TestBed.createComponent(BIParameterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
