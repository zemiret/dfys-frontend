import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatIconRegistry,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTreeModule,
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialModules = [
  LayoutModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatTreeModule,
  FlexLayoutModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: materialModules,
})
export class AngularMaterialModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      'settings',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg')
    );
    matIconRegistry.addSvgIcon(
      'home',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg')
    );
  }
}
