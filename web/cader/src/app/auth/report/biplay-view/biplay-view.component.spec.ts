import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIPlayViewComponent } from './biplay-view.component';

describe('BIPlayViewComponent', () => {
  let component: BIPlayViewComponent;
  let fixture: ComponentFixture<BIPlayViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BIPlayViewComponent]
    });
    fixture = TestBed.createComponent(BIPlayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
