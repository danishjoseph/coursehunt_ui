import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPlatformItemComponent } from './landing-platform-item.component';

describe('LandingPlatformItemComponent', () => {
  let component: LandingPlatformItemComponent;
  let fixture: ComponentFixture<LandingPlatformItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPlatformItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPlatformItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
