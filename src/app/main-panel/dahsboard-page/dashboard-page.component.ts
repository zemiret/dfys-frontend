import { Component, OnInit } from '@angular/core';
import { SkillsQuery } from '@app/main-panel/skills/state';
import { CategoriesQuery } from '@model/categories';
import { Observable } from 'rxjs';
import {
  ActivitiesQuery,
  ActivitiesService,
  Activity,
} from '../activities/state';

@Component({
  selector: 'dfys-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  isActivitiesLoading$: Observable<boolean>;
  activities$: Observable<Activity[]>;

  constructor(
    private activitiesService: ActivitiesService,
    private activitiesQuery: ActivitiesQuery,
    private skillsQuery: SkillsQuery,
    private categoriesQuery: CategoriesQuery
  ) {}

  ngOnInit() {
    this.activitiesService.loadRecent();

    this.isActivitiesLoading$ = this.activitiesQuery.selectLoading();
    this.activities$ = this.activitiesQuery.selectAll();
  }

  private selectSkillForActivity(activity: Activity) {
    return this.skillsQuery.selectEntity(activity.skill);
  }

  private selectCategoryForActivity(activity: Activity) {
    return this.categoriesQuery.selectEntity(activity.category);
  }
}
