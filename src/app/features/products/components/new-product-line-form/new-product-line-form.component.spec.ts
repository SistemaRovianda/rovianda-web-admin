import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductLineFormComponent } from './new-product-line-form.component';

describe('NewProductLineFormComponent', () => {
  let component: NewProductLineFormComponent;
  let fixture: ComponentFixture<NewProductLineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductLineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductLineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
