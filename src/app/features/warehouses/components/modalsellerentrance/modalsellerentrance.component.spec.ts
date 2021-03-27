import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsellerentranceComponent } from './modalsellerentrance.component';

describe('ModalsellerentranceComponent', () => {
  let component: ModalsellerentranceComponent;
  let fixture: ComponentFixture<ModalsellerentranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsellerentranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsellerentranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
