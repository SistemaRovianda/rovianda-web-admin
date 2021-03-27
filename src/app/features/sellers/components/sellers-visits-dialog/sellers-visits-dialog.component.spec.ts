import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersVisitsDialogComponent } from './sellers-visits-dialog.component';

describe('SellersVisitsDialogComponent', () => {
  let component: SellersVisitsDialogComponent;
  let fixture: ComponentFixture<SellersVisitsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersVisitsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersVisitsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
