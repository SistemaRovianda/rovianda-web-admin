import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFridgeComponent } from './create-fridge.component';

describe('CreateFridgeComponent', () => {
  let component: CreateFridgeComponent;
  let fixture: ComponentFixture<CreateFridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
