import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRequestComponent } from './sales-request.component';

describe('SalesRequestComponent', () => {
  let component: SalesRequestComponent;
  let fixture: ComponentFixture<SalesRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
