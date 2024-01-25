import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbasTabComponent } from './abas-tab.component';

describe('AbasTabComponent', () => {
  let component: AbasTabComponent;
  let fixture: ComponentFixture<AbasTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbasTabComponent]
    });
    fixture = TestBed.createComponent(AbasTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
