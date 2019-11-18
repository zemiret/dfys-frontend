import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityPanelComponent } from '@app/main-panel/activities/components/activity-panel/activity-panel.component';
import { RouterQuery } from '@datorama/akita-ng-router-store';

import { ActivitiesPageComponent } from './activities-page.component';

describe('ActivitiesPageComponent', () => {
  let component: ActivitiesPageComponent;
  let fixture: ComponentFixture<ActivitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesPageComponent, ActivityPanelComponent],
      providers: [RouterQuery],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
