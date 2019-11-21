import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { ActivityPanelComponent } from './components/activity-panel/activity-panel.component';

@NgModule({
  declarations: [ActivitiesPageComponent, ActivityPanelComponent],
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
})
export class ActivitiesModule {}
