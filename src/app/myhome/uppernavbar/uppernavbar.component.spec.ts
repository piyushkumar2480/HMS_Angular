import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppernavbarComponent } from './uppernavbar.component';

describe('UppernavbarComponent', () => {
  let component: UppernavbarComponent;
  let fixture: ComponentFixture<UppernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppernavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
