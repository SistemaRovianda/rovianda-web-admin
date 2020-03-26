import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MaintenancePageComponent } from "./maintenance.page";

describe("MaintenanceComponent", () => {
  let component: MaintenancePageComponent;
  let fixture: ComponentFixture<MaintenancePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenancePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
