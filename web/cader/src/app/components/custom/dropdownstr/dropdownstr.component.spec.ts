import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownstrComponent } from './dropdownstr.component';

describe('DropdownstrComponent', () => {
  let component: DropdownstrComponent;
  let fixture: ComponentFixture<DropdownstrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownstrComponent]
    });
    fixture = TestBed.createComponent(DropdownstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
