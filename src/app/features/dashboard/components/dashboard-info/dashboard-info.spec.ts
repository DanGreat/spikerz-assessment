import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfo } from './dashboard-info';

describe('DashboardInfo', () => {
  let component: DashboardInfo;
  let fixture: ComponentFixture<DashboardInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
