import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReaisComponent } from './input-reais.component';

describe('InputReaisComponent', () => {
  let component: InputReaisComponent;
  let fixture: ComponentFixture<InputReaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputReaisComponent]
    });
    fixture = TestBed.createComponent(InputReaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
