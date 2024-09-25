import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrausaldisplayComponent } from './crausaldisplay.component';

describe('CrausaldisplayComponent', () => {
  let component: CrausaldisplayComponent;
  let fixture: ComponentFixture<CrausaldisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrausaldisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrausaldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
