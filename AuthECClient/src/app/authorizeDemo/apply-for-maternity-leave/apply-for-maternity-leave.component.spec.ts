import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForMaternityLeaveComponent } from './apply-for-maternity-leave.component';

describe('ApplyForMaternityLeaveComponent', () => {
  let component: ApplyForMaternityLeaveComponent;
  let fixture: ComponentFixture<ApplyForMaternityLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyForMaternityLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyForMaternityLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
