import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActivitiesModule } from './activities/activities.module';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavComponent } from './nav/nav.component';
import { SettingsModule } from './settings/settings.module';
import { SharedModule } from './shared/shared.module';
import { SkillsModule } from './skills/skills.module';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    AngularMaterialModule,
    DashboardModule,
    ActivitiesModule,
    SkillsModule,
    SettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
