import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWarehousesTableComponent } from './list-warehouses-table.component';

describe('ListWarehousesTablesComponent', () => {
  let component: ListWarehousesTableComponent;
  let fixture: ComponentFixture<ListWarehousesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWarehousesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWarehousesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
