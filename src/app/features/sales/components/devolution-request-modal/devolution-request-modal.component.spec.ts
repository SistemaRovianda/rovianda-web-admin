import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolutionRequestModalComponent } from './devolution-request-modal.component';

describe('DevolutionRequestModalComponent', () => {
  let component: DevolutionRequestModalComponent;
  let fixture: ComponentFixture<DevolutionRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolutionRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolutionRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
