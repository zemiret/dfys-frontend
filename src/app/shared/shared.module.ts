import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '@app/angular-material.module';
import { AuthModule } from '@app/auth/auth.module';
import {
  ActivityCardComponent,
  InputBtnControlComponent,
  MainNavigationComponent,
} from '@shared/components';
import { NgLetDirective } from './directives/ng-let.directive';

const exportedMembers = [
  ActivityCardComponent,
  NgLetDirective,
  MainNavigationComponent,
  InputBtnControlComponent,
];

@NgModule({
  declarations: exportedMembers,
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    AuthModule,
    ReactiveFormsModule,
  ],
  exports: exportedMembers,
})
export class SharedModule {}
