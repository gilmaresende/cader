import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaHItemComponent } from './aba-hitem.component';

describe('AbaHItemComponent', () => {
  let component: AbaHItemComponent;
  let fixture: ComponentFixture<AbaHItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbaHItemComponent]
    });
    fixture = TestBed.createComponent(AbaHItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
