import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTopTrendingComponent } from './landing-top-trending.component';

describe('LandingTopTrendingComponent', () => {
  let component: LandingTopTrendingComponent;
  let fixture: ComponentFixture<LandingTopTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingTopTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTopTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
