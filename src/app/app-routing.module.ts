import { ResponseToDeviationReportComponent } from './response-to-deviation-report/response-to-deviation-report.component';
import { IssueLogComponent } from './issue-log/issue-log.component';
import { ReportingFormComponent } from './reporting-form/reporting-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: IssueLogComponent },
  { path: 'reporting-form', component: ReportingFormComponent },
  // Temporary route
  {
    path: 'response-to-deviation-report',
    component: ResponseToDeviationReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
