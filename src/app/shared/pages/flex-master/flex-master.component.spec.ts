import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexMasterComponent } from './flex-master.component';

describe('FlexMasterComponent', () => {
  let component: FlexMasterComponent;
  let fixture: ComponentFixture<FlexMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
