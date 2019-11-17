import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@app/angular-material.module';
import { ActivityCardComponent } from '@shared/components';

@NgModule({
  declarations: [ActivityCardComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ActivityCardComponent],
})
export class SharedModule {}
