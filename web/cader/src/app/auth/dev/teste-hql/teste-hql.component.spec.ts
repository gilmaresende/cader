import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteHqlComponent } from './teste-hql.component';

describe('TesteHqlComponent', () => {
  let component: TesteHqlComponent;
  let fixture: ComponentFixture<TesteHqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteHqlComponent]
    });
    fixture = TestBed.createComponent(TesteHqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
