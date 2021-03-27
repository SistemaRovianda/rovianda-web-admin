import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesClientModalComponent } from './sales-client-modal.component';

describe('SalesClientModalComponent', () => {
  let component: SalesClientModalComponent;
  let fixture: ComponentFixture<SalesClientModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesClientModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
