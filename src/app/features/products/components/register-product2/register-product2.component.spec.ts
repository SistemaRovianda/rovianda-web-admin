import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProduct2Component } from './register-product2.component';

describe('RegisterProduct2Component', () => {
  let component: RegisterProduct2Component;
  let fixture: ComponentFixture<RegisterProduct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProduct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
