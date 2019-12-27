import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@app/auth/auth.module';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelModule } from './main-panel/main-panel.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AngularMaterialModule,
    SettingsModule,
    MainPanelModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
