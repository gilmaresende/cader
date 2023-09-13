import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDowComponent } from './drop-dow.component';

describe('DropDowComponent', () => {
  let component: DropDowComponent;
  let fixture: ComponentFixture<DropDowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDowComponent]
    });
    fixture = TestBed.createComponent(DropDowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
