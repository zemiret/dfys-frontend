import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
import { ActivitiesPageComponent } from '@app/main-panel/activities/pages';
import { SharedModule } from '@shared/shared.module';
import { ActivityEntryComponent } from './components';
import { ActivityEntryListComponent, ActivityPanelComponent } from './smarts';

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
