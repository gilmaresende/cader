import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBiComponent } from './create-bi.component';

describe('CreateBiComponent', () => {
  let component: CreateBiComponent;
  let fixture: ComponentFixture<CreateBiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBiComponent]
    });
    fixture = TestBed.createComponent(CreateBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
