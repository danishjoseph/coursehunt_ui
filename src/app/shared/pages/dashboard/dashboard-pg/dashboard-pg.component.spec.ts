import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPgComponent } from './dashboard-pg.component';

describe('DashboardPgComponent', () => {
  let component: DashboardPgComponent;
  let fixture: ComponentFixture<DashboardPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
