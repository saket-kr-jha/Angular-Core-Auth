import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMembersOnlyComponent } from './library-members-only.component';

describe('LibraryMembersOnlyComponent', () => {
  let component: LibraryMembersOnlyComponent;
  let fixture: ComponentFixture<LibraryMembersOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryMembersOnlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryMembersOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
