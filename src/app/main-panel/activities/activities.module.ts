import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
import { ActivitiesPageComponent } from '@app/main-panel/activities/pages';
import { SharedModule } from '@shared/shared.module';
import {
  ActivityEntryComponent,
  ActivityEntryListComponent,
  ActivityFormComponent,
} from './components';
import { ActivityPanelComponent } from './smarts';

@NgModule({
  declarations: [
    ActivitiesPageComponent,
    ActivityPanelComponent,
    ActivityEntryListComponent,
    ActivityEntryComponent,
    ActivityFormComponent,
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
