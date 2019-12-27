import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsRoutingModule } from '@app/settings/settings-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
