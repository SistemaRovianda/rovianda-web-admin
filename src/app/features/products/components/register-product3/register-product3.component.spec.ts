import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProduct3Component } from './register-product3.component';

describe('RegisterProduct3Component', () => {
  let component: RegisterProduct3Component;
  let fixture: ComponentFixture<RegisterProduct3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProduct3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
