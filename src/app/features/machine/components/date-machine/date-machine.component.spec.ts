import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMachineComponent } from './date-machine.component';

describe('DateMachineComponent', () => {
  let component: DateMachineComponent;
  let fixture: ComponentFixture<DateMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
