import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
import { DashboardPageComponent } from '@app/main-panel/dahsboard-page/dashboard-page.component';
import { MainPanelRoutingModule } from '@app/main-panel/main-panel-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ActivitiesModule } from './activities/activities.module';
import { SkillsSidebarComponent } from './components';
import { SkillAddControlComponent } from './components/skill-add-control/skill-add-control.component';
import { MainPanelPageComponent } from './main-panel-page/main-panel-page.component';
import { SkillsModule } from './skills/skills.module';

@NgModule({
  declarations: [
    SkillsSidebarComponent,
    MainPanelPageComponent,
    DashboardPageComponent,
    SkillAddControlComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ActivitiesModule,
    SkillsModule,
    AngularMaterialModule,
    MainPanelRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class MainPanelModule {}
