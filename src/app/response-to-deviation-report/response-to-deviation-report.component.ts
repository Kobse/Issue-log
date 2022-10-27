import { Component, OnInit } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-response-to-deviation-report',
  templateUrl: './response-to-deviation-report.component.html',
  styleUrls: ['./response-to-deviation-report.component.scss'],
})
export class ResponseToDeviationReportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const tooltips = document.querySelectorAll('.target');
    tooltips.forEach((tooltip) => {
      new Tooltip(tooltip);
    });
  }
}
