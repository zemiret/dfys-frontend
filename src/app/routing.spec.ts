import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { ActivitiesPageComponent } from '@app/main-panel/activities/activities-page/activities-page.component';
import { ActivityCardComponent } from '@app/main-panel/dashboard/activity-card/activity-card.component';
import { DashboardPageComponent } from '@app/main-panel/dashboard/dahsboard-page/dashboard-page.component';
import { SkillsSidebarComponent } from '@app/main-panel/dashboard/skills-sidebar/skills-sidebar.component';
import { SkillsPageComponent } from '@app/main-panel/skills/skills-page/skills-page.component';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SettingsPageComponent } from './settings/settings-page/settings-page.component';

describe('routes', () => {
  let router: Router;
  let location: Location;
  let fixture: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        AngularMaterialModule,
      ],
      declarations: [
        ActivitiesPageComponent,
        DashboardPageComponent,
        SettingsPageComponent,
        SkillsPageComponent,
        AppComponent,
        LayoutComponent,
        ActivityCardComponent,
        SkillsSidebarComponent,
      ],
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);

    router.initialNavigation();
  }));

  it('navigation to empty path should lead to dashboard', async () => {
    await router.navigate(['']);
    expect(location.path()).toBe('/');
  });

  it('navigation to settings should lead to settings', async () => {
    await router.navigate(['/settings']);
    expect(location.path()).toBe('/settings');
  });

  it('navigation to skills should lead to skills', async () => {
    await router.navigate(['/skills', '12']);
    expect(location.path()).toBe('/skills/12');
  });

  it('navigation to activities should lead to activities', async () => {
    await router.navigate(['/skills', '12', 'activities', '11']);
    expect(location.path()).toBe('/skills/12/activities/11');
  });
});
