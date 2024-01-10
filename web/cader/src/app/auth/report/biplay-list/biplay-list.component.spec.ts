import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIPlayListComponent } from './biplay-list.component';

describe('BIPlayListComponent', () => {
  let component: BIPlayListComponent;
  let fixture: ComponentFixture<BIPlayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BIPlayListComponent]
    });
    fixture = TestBed.createComponent(BIPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
