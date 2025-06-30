import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorIncComponent } from './motor-inc.component';

describe('MotorIncComponent', () => {
  let component: MotorIncComponent;
  let fixture: ComponentFixture<MotorIncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorIncComponent]
    });
    fixture = TestBed.createComponent(MotorIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
