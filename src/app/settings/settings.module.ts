import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsRoutingModule } from '@app/settings/settings-routing.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
