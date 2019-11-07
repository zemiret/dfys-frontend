import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { DashboardPageComponent } from './dahsboard-page/dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent, ActivityCardComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class DashboardModule {}
