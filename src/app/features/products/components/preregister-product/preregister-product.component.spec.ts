import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreregisterProductComponent } from './preregister-product.component';

describe('PreregisterProductComponent', () => {
  let component: PreregisterProductComponent;
  let fixture: ComponentFixture<PreregisterProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreregisterProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreregisterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
