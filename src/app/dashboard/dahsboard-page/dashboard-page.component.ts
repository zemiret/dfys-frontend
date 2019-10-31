import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeepSkill } from '../../skills/state';
import { DashboardDataService } from '../dashboard-data/dashboard-data.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  skills$: Observable<DeepSkill[]>;

  constructor(private dashboardDataService: DashboardDataService) {
  }

  ngOnInit() {
    this.dashboardDataService.loadData();
    this.skills$ = this.dashboardDataService.getData();
  }
}
