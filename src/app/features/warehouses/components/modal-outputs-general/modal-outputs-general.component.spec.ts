import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOutputsGeneralComponent } from './modal-outputs-general.component';

describe('ModalOutputsGeneralComponent', () => {
  let component: ModalOutputsGeneralComponent;
  let fixture: ComponentFixture<ModalOutputsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOutputsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOutputsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
