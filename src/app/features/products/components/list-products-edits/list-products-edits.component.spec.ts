import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsEditsComponent } from './list-products-edits.component';

describe('ListProductsEditsComponent', () => {
  let component: ListProductsEditsComponent;
  let fixture: ComponentFixture<ListProductsEditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductsEditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
