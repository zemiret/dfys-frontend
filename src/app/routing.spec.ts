import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { ActivitiesPageComponent } from '@app/main-panel/activities/activities-page/activities-page.component';
import { SkillsSidebarComponent } from '@app/main-panel/components/skills-sidebar/skills-sidebar.component';
import { DashboardPageComponent } from '@app/main-panel/dahsboard-page/dashboard-page.component';
import { SkillCardComponent } from '@app/main-panel/skills/components';
import { SkillsPageComponent } from '@app/main-panel/skills/skills-page/skills-page.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';
import { ActivityCardComponent } from '@shared/components';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SettingsPageComponent } from './settings/settings-page/settings-page.component';

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
        PageNotFoundComponent,
        SkillCardComponent,
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
    await router.navigate(['/settings']);
    expect(location.path()).toBe('/settings');
  });

  it('navigation to skills$ should lead to skills$', async () => {
    await router.navigate(['/main-panel/skills$', '12']);
    expect(location.path()).toBe('/main-panel/skills$/12');
  });

  it('navigation to activities should lead to activities', async () => {
    await router.navigate(['/main-panel/skills$', '12', 'activities', '11']);
    expect(location.path()).toBe('/main-panel/skills$/12/activities/11');
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
