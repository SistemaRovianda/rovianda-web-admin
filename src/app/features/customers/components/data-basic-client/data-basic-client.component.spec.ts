import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBasicClientComponent } from './data-basic-client.component';

describe('DataBasicClientComponent', () => {
  let component: DataBasicClientComponent;
  let fixture: ComponentFixture<DataBasicClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBasicClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBasicClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
