import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { DashboardPageComponent } from './dahsboard-page/dashboard-page.component';
import { SkillsSidebarComponent } from './skills-sidebar/skills-sidebar.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ActivityCardComponent,
    SkillsSidebarComponent,
  ],
  imports: [CommonModule, AngularMaterialModule],
})
export class DashboardModule {}
