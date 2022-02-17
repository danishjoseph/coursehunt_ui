import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformEditorComponent } from './platform-editor.component';

describe('PlatformEditorComponent', () => {
  let component: PlatformEditorComponent;
  let fixture: ComponentFixture<PlatformEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
