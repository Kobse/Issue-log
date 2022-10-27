import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilterDropdownComponent } from './add-filter-dropdown.component';

describe('AddFilterDropdownComponent', () => {
  let component: AddFilterDropdownComponent;
  let fixture: ComponentFixture<AddFilterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFilterDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
