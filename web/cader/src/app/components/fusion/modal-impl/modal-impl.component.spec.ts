import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImplComponent } from './modal-impl.component';

describe('ModalImplComponent', () => {
  let component: ModalImplComponent;
  let fixture: ComponentFixture<ModalImplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalImplComponent]
    });
    fixture = TestBed.createComponent(ModalImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
