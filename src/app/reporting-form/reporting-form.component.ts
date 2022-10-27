import { Component, OnInit } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-reporting-form',
  templateUrl: './reporting-form.component.html',
  styleUrls: ['./reporting-form.component.scss'],
})
export class ReportingFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const tooltips = document.querySelectorAll('.target');
    tooltips.forEach((tooltip) => {
      new Tooltip(tooltip);
    });
  }
}
