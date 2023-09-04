import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTesteComponent } from './btn-teste.component';

describe('BtnTesteComponent', () => {
  let component: BtnTesteComponent;
  let fixture: ComponentFixture<BtnTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnTesteComponent]
    });
    fixture = TestBed.createComponent(BtnTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
