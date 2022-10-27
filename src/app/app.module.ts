import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityTableComponent } from './activity-table/activity-table.component';
import { ReportingFormComponent } from './reporting-form/reporting-form.component';
import { ActiveFiltersComponent } from './active-filters/active-filters.component';
import { AddFilterDropdownComponent } from './add-filter-dropdown/add-filter-dropdown.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IssueLogComponent } from './issue-log/issue-log.component';
import { DeviationReportComponent } from './deviation-report/deviation-report.component';
import { ResponseToDeviationReportComponent } from './response-to-deviation-report/response-to-deviation-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityTableComponent,
    ReportingFormComponent,
    ActiveFiltersComponent,
    AddFilterDropdownComponent,
    SearchbarComponent,
    IssueLogComponent,
    DeviationReportComponent,
    ResponseToDeviationReportComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
