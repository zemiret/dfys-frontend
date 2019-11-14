import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { SkillsSidebarComponent } from '@app/main-panel/components';

import { MainPanelPageComponent } from './main-panel-page.component';

describe('MainPanelPageComponent', () => {
  let component: MainPanelPageComponent;
  let fixture: ComponentFixture<MainPanelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPanelPageComponent, SkillsSidebarComponent],
      imports: [
        RouterTestingModule,
        AngularMaterialModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
