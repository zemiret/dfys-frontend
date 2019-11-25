import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
import { SharedModule } from '@shared/shared.module';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import {
  ActivityEntryComponent,
  ActivityEntryListComponent,
} from './components';
import { ActivityPanelComponent } from './components/activity-panel/activity-panel.component';

@NgModule({
  declarations: [
    ActivitiesPageComponent,
    ActivityPanelComponent,
    ActivityEntryListComponent,
    ActivityEntryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ActivitiesModule {}
