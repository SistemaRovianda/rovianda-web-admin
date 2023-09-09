import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSellersComponent } from './list-all-sellers.component';

describe('ListAllClientsComponent', () => {
  let component: ListAllSellersComponent;
  let fixture: ComponentFixture<ListAllSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllSellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
