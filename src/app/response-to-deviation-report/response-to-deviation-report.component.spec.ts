import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseToDeviationReportComponent } from './response-to-deviation-report.component';

describe('ResponseToDeviationReportComponent', () => {
  let component: ResponseToDeviationReportComponent;
  let fixture: ComponentFixture<ResponseToDeviationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseToDeviationReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseToDeviationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
