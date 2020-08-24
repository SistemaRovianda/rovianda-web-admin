import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProduct1Component } from './register-product1.component';

describe('RegisterProduct1Component', () => {
  let component: RegisterProduct1Component;
  let fixture: ComponentFixture<RegisterProduct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProduct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
