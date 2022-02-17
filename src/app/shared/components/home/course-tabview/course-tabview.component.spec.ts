import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTabviewComponent } from './course-tabview.component';

describe('CourseTabviewComponent', () => {
  let component: CourseTabviewComponent;
  let fixture: ComponentFixture<CourseTabviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTabviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTabviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
