import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPlatformsComponent } from './landing-platforms.component';

describe('LandingPlatformsComponent', () => {
  let component: LandingPlatformsComponent;
  let fixture: ComponentFixture<LandingPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPlatformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
