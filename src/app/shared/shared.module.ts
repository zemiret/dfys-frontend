import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@app/angular-material.module';
import { ActivityCardComponent } from '@shared/components';
import { NgLetDirective } from './directives/ng-let.directive';

@NgModule({
  declarations: [ActivityCardComponent, NgLetDirective],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ActivityCardComponent, NgLetDirective],
})
export class SharedModule {}
