import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CnfTruckTrailerComponent } from './components/cnf-truck-trailer/cnf-truck-trailer.component';
import { WalkaroundChecklistComponent } from './components/walkaround-checklist/walkaround-checklist.component';
import { ChecklistFinalComponent } from './components/checklist-final/checklist-final.component';
import { DropDetailFirstPageComponent } from './components/drop-detail-first-page/drop-detail-first-page.component';
import { DropDetailSecondPageComponent } from './components/drop-detail-second-page/drop-detail-second-page.component';
import { LogShiftHoursComponent } from './components/log-shift-hours/log-shift-hours.component';
import { RequestLeaveComponent } from './components/request-leave/request-leave.component';
import { SelectCompanyComponent } from './components/select-company/select-company.component';
import { TrainingComponent } from './components/training/training.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { WeeklySignoffSheetComponent } from './components/weekly-signoff-sheet/weekly-signoff-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CnfTruckTrailerComponent,
    WalkaroundChecklistComponent,
    ChecklistFinalComponent,
    DropDetailFirstPageComponent,
    DropDetailSecondPageComponent,
    LogShiftHoursComponent,
    RequestLeaveComponent,
    SelectCompanyComponent,
    TrainingComponent,
    TripDetailsComponent,
    WeeklySignoffSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
