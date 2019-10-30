import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill, SkillsQuery, SkillsService } from '../../skills/state';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  skills$: Observable<Skill[]>;

  constructor(private skillsQuery: SkillsQuery, private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsService.loadList();
    this.skills$ = this.skillsQuery.selectSkillList();
  }
}
