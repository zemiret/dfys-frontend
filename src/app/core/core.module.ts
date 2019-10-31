import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [CommonModule, environment.production ? [] : AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot()],
})
export class CoreModule {}
