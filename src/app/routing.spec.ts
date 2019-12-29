import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { routes } from '@app/app-routing.module';
import { ActivityEntryComponent } from '@app/main-panel/activities/components';
import { ActivitiesPageComponent } from '@app/main-panel/activities/pages';
import {
  ActivityEntryListComponent,
  ActivityPanelComponent,
} from '@app/main-panel/activities/smarts';
import { SkillsSidebarTreeComponent } from '@app/main-panel/components';
import { DashboardPageComponent } from '@app/main-panel/pages';
import { SkillCardComponent } from '@app/main-panel/skills/components';
import { SkillsPageComponent } from '@app/main-panel/skills/pages';
import { SkillsSidebarComponent } from '@app/main-panel/smarts';
import { PageNotFoundComponent } from '@app/pages';
import { SettingsPageComponent } from '@app/settings/pages';
import { RouteNames, Routes } from '@shared/constants/routes';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';

describe('routes', () => {
  let router: Router;
  let location: Location;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        SharedModule,
        FormsModule,
      ],
      declarations: [
        ActivitiesPageComponent,
        DashboardPageComponent,
        SettingsPageComponent,
        SkillsPageComponent,
        SkillsSidebarTreeComponent,
        AppComponent,
        SkillsSidebarComponent,
        PageNotFoundComponent,
        SkillCardComponent,
        ActivityPanelComponent,
        ActivityEntryListComponent,
        ActivityEntryComponent,
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    router.initialNavigation();
  }));

  it('navigation to empty path should lead to main panel', async () => {
    await router.navigate(['']);
    expect(location.path()).toBe('/main-panel');
  });

  it('navigation to settings should lead to settings', async () => {
    await router.navigate([Routes.SETTINGS]);
    expect(location.path()).toBe('/settings');
  });

  it('navigation to skills should lead to skills', async () => {
    await router.navigate([Routes.SKILLS, '12']);
    expect(location.path()).toBe('/main-panel/skills/12');
  });

  it('navigation to activities should lead to activities', async () => {
    await router.navigate([Routes.SKILLS, '12', RouteNames.ACTIVITIES, '11']);
    expect(location.path()).toBe('/main-panel/skills/12/activities/11');
  });

  it('navigation to login should lead to login', async () => {
    await router.navigate([Routes.LOGIN]);
    expect(location.path()).toBe('/auth/login');
  });

  it('navigation to retgister should lead to register', async () => {
    await router.navigate([Routes.REGISTER]);
    expect(location.path()).toBe('/auth/register');
  });

  it('navigation to non existing routes should display page not found', async () => {
    await router.navigate([
      'some-stupid',
      'inherently wrong',
      'routeasjdbaksjhdksaj123123',
    ]);

    const appElement: HTMLElement = fixture.debugElement.nativeElement;
    const pageNotFoundEl: HTMLElement = appElement.querySelector(
      'dfys-page-not-found'
    );

    expect(pageNotFoundEl).toBeTruthy();
  });
});
