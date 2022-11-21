import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"confirmtrucktrailer",component:CnfTruckTrailerComponent},
  {path:"checklist",component:WalkaroundChecklistComponent},
  {path:"confirmchecklist",component:ChecklistFinalComponent},
  {path:"dropdetail",component:DropDetailFirstPageComponent},
  {path:"confirmdropdetail",component:DropDetailSecondPageComponent},
  {path:"shifthourslog",component:LogShiftHoursComponent},
  {path:"leaverequest",component:RequestLeaveComponent},
  {path:"selectcompany",component:SelectCompanyComponent},
  {path:"training",component:TrainingComponent},
  {path:"tripdetail",component:TripDetailsComponent},
  {path:"weeklysignoffsheet",component:WeeklySignoffSheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
