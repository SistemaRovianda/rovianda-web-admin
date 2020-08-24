import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressClientComponent } from './address-client.component';

describe('AddressClientComponent', () => {
  let component: AddressClientComponent;
  let fixture: ComponentFixture<AddressClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
