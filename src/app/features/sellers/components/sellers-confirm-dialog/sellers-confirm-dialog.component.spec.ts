import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersConfirmDialogComponent } from './sellers-confirm-dialog.component';

describe('SellersConfirmDialogComponent', () => {
  let component: SellersConfirmDialogComponent;
  let fixture: ComponentFixture<SellersConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
