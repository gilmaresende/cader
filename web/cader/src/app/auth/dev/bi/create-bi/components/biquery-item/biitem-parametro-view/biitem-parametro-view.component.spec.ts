import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIItemParametroViewComponent } from './biitem-parametro-view.component';

describe('BIItemParametroViewComponent', () => {
  let component: BIItemParametroViewComponent;
  let fixture: ComponentFixture<BIItemParametroViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BIItemParametroViewComponent]
    });
    fixture = TestBed.createComponent(BIItemParametroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
