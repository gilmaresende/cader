import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinedParameterViewComponent } from './defined-parameter-view.component';

describe('DefinedParameterViewComponent', () => {
  let component: DefinedParameterViewComponent;
  let fixture: ComponentFixture<DefinedParameterViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefinedParameterViewComponent]
    });
    fixture = TestBed.createComponent(DefinedParameterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
