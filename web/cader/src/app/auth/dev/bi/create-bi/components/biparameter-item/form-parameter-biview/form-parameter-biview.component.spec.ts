import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParameterBIViewComponent } from './form-parameter-biview.component';

describe('FormParameterBIViewComponent', () => {
  let component: FormParameterBIViewComponent;
  let fixture: ComponentFixture<FormParameterBIViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormParameterBIViewComponent]
    });
    fixture = TestBed.createComponent(FormParameterBIViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
