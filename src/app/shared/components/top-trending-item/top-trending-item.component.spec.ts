import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrendingItemComponent } from './top-trending-item.component';

describe('TopTrendingItemComponent', () => {
  let component: TopTrendingItemComponent;
  let fixture: ComponentFixture<TopTrendingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTrendingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrendingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
