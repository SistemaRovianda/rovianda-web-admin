import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCodeComponent } from './change-code.component';

describe('ChangeCodeComponent', () => {
  let component: ChangeCodeComponent;
  let fixture: ComponentFixture<ChangeCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
