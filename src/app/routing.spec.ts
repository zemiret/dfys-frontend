import { Location } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivitiesPageComponent } from './activities/activities-page/activities-page.component';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { DahsboardPageComponent } from './dashboard/dahsboard-page/dahsboard-page.component';
import { SettingsPageComponent } from './settings/settings-page/settings-page.component';
import { SkillsPageComponent } from './skills/skills-page/skills-page.component';

describe('routes', () => {
  let router: Router;
  let location: Location;
  let fixture: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        ActivitiesPageComponent,
        DahsboardPageComponent,
        SettingsPageComponent,
        SkillsPageComponent,
        AppComponent,
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
