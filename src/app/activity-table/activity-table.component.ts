import { Component, OnInit } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.scss'],
})
export class ActivityTableComponent implements OnInit {
  newStatus = '';
  statusTypes = ['inactive', 'in progress', 'active'];

  constructor() {}

  ngOnInit(): void {
    const tooltips = document.querySelectorAll('.target');
    tooltips.forEach((tooltip) => {
      new Tooltip(tooltip);
    });
  }

  // Activities from database
  activities = [
    {
      datePosted: '08.12.2021',
      subject: 'Avfallssortering',
      category: 'Miljø',
      id: '1234123',
      organizationalUnit: 'Test AS',
      typeOfEvent: 'Improvement',
      status: 'completed',
    },
    {
      datePosted: '07.12.2021',
      subject: 'Ødelagt lampe',
      category: 'Electronics',
      id: '4321324',
      organizationalUnit: 'Lorem AS',
      typeOfEvent: 'Accident',
      status: 'in progress',
    },
    {
      datePosted: '02.12.2021',
      subject: 'Tømme søppel',
      category: 'Renhold - avfall',
      id: '1324412',
      organizationalUnit: 'Ipsum AS',
      typeOfEvent: 'Observation',
      status: 'inactive',
    },
  ];
}
