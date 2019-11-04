import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeepSkill } from '../../skills/state';
import { DashboardDataQuery, DashboardDataService } from '../state';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  isSkillsLoading$: Observable<boolean>;
  skills$: Observable<DeepSkill[]>;

  constructor(private dashboardDataService: DashboardDataService,
              private dashboardDataQuery: DashboardDataQuery) {
  }

  ngOnInit() {
    this.dashboardDataService.loadSkills();

    this.isSkillsLoading$ = this.dashboardDataQuery.selectSkillsLoading();
    this.skills$ = this.dashboardDataQuery.selectSkills();
  }
}
