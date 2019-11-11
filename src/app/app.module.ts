import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './layout/layout.component';
import { MainPanelModule } from './main-panel/main-panel.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    AngularMaterialModule,
    SettingsModule,
    MainPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
