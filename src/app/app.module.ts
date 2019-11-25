import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MainPanelModule } from './main-panel/main-panel.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AngularMaterialModule,
    SettingsModule,
    MainPanelModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
