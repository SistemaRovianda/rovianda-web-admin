import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLineProductDialogComponent } from './delete-line-product-dialog.component';

describe('DeleteLineProductDialogComponent', () => {
  let component: DeleteLineProductDialogComponent;
  let fixture: ComponentFixture<DeleteLineProductDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLineProductDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLineProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
