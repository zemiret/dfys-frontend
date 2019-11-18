import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '@app/angular-material.module';
import { SharedModule } from '@shared/shared.module';
import { SkillCardComponent } from './components';
import { SkillsPageComponent } from './skills-page/skills-page.component';

@NgModule({
  declarations: [SkillsPageComponent, SkillCardComponent],
  imports: [CommonModule, SharedModule, AngularMaterialModule, RouterModule],
})
export class SkillsModule {}
