import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '@app/angular-material.module';
import { AuthModule } from '@app/auth/auth.module';
import { ActivityCardComponent } from '@shared/components';
import { MainNavigationComponent } from '@shared/components/main-navigation/main-navigation.component';
import { NgLetDirective } from './directives/ng-let.directive';

const exportedMembers = [
  ActivityCardComponent,
  NgLetDirective,
  MainNavigationComponent,
];

@NgModule({
  declarations: exportedMembers,
  imports: [CommonModule, AngularMaterialModule, RouterModule, AuthModule],
  exports: exportedMembers,
})
export class SharedModule {}
