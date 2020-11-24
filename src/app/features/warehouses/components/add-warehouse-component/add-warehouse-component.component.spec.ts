import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWarehouseComponentComponent } from './add-warehouse-component.component';

describe('AddWarehouseComponentComponent', () => {
  let component: AddWarehouseComponentComponent;
  let fixture: ComponentFixture<AddWarehouseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWarehouseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWarehouseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
