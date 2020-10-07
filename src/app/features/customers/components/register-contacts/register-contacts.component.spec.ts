import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContactsComponent } from './register-contacts.component';

describe('RegisterContactsComponent', () => {
  let component: RegisterContactsComponent;
  let fixture: ComponentFixture<RegisterContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
