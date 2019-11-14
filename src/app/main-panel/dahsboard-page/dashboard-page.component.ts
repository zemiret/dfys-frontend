import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivitiesQuery,
  ActivitiesService,
  DeepActivity,
} from '../activities/state';

@Component({
  selector: 'dfys-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  isActivitiesLoading$: Observable<boolean>;
  activities$: Observable<DeepActivity[]>;

  constructor(
    private activitiesService: ActivitiesService,
    private activitiesQuery: ActivitiesQuery
  ) {}

  ngOnInit() {
    this.activitiesService.loadRecent();

    this.isActivitiesLoading$ = this.activitiesQuery.selectLoading();
    this.activities$ = this.activitiesQuery.selectDeepActivityList();
  }
}
