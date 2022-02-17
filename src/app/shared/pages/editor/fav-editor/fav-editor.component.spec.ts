import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavEditorComponent } from './fav-editor.component';

describe('FavEditorComponent', () => {
  let component: FavEditorComponent;
  let fixture: ComponentFixture<FavEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
