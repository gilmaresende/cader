import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLoadingComponent } from './animation-loading.component';

describe('AnimationLoadingComponent', () => {
  let component: AnimationLoadingComponent;
  let fixture: ComponentFixture<AnimationLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationLoadingComponent]
    });
    fixture = TestBed.createComponent(AnimationLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
