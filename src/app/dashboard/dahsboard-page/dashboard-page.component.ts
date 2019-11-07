import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivitiesQuery, ActivitiesService, DeepActivity } from '../../activities/state';
import { DeepSkill } from '../../skills/state';
import { DashboardDataQuery, DashboardDataService } from '../state';

@Component({
  selector: 'dfys-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  isSkillsLoading$: Observable<boolean>;
  isActivitiesLoading$: Observable<boolean>;
  skills$: Observable<DeepSkill[]>;
  activities$: Observable<DeepActivity[]>;

  constructor(
    private dashboardDataService: DashboardDataService,
    private dashboardDataQuery: DashboardDataQuery,
    private activitiesService: ActivitiesService,
    private activitiesQuery: ActivitiesQuery,
  ) {
  }

  ngOnInit() {
    this.dashboardDataService.loadSkills();
    this.activitiesService.loadRecent();

    this.isSkillsLoading$ = this.dashboardDataQuery.selectSkillsLoading();
    this.isActivitiesLoading$ = this.activitiesQuery.selectLoading();

    this.skills$ = this.dashboardDataQuery.selectSkills();
    this.activities$ = this.activitiesQuery.selectDeepActivityList();
  }
}
