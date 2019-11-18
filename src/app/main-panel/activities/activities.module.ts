import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { ActivityPanelComponent } from './components/activity-panel/activity-panel.component';

@NgModule({
  declarations: [ActivitiesPageComponent, ActivityPanelComponent],
  imports: [CommonModule],
})
export class ActivitiesModule {}
