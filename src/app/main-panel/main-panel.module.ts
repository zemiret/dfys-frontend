import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
import { MainPanelRoutingModule } from '@app/main-panel/main-panel-routing.module';
import {
  DashboardPageComponent,
  MainPanelPageComponent,
} from '@app/main-panel/pages';
import { SkillsSidebarComponent } from '@app/main-panel/smarts/skills-sidebar/skills-sidebar.component';
import { SharedModule } from '@shared/shared.module';
import { ActivitiesModule } from './activities/activities.module';
import { SkillsSidebarTreeComponent } from './components';
import { SkillsModule } from './skills/skills.module';

@NgModule({
  declarations: [
    SkillsSidebarComponent,
    MainPanelPageComponent,
    DashboardPageComponent,
    SkillsSidebarTreeComponent,
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
