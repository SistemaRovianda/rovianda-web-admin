import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTypeReportComponent } from './modal-type-report.component';

describe('ModalTypeReportComponent', () => {
  let component: ModalTypeReportComponent;
  let fixture: ComponentFixture<ModalTypeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTypeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTypeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
