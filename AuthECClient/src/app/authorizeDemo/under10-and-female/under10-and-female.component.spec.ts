import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Under10AndFemaleComponent } from './under10-and-female.component';

describe('Under10AndFemaleComponent', () => {
  let component: Under10AndFemaleComponent;
  let fixture: ComponentFixture<Under10AndFemaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Under10AndFemaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Under10AndFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
