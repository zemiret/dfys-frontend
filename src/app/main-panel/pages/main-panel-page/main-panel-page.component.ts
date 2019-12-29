import { Component, OnInit } from '@angular/core';
import { DeepSkill, SkillsService } from '@app/main-panel/skills/state';
import { MainPanelDataQuery } from '@app/main-panel/state/main-panel-data.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'dfys-main-panel-page',
  templateUrl: './main-panel-page.component.html',
  styleUrls: ['./main-panel-page.component.scss'],
})
export class MainPanelPageComponent implements OnInit {
  isSkillsLoading$: Observable<boolean>;
  skills$: Observable<DeepSkill[]>;

  constructor(
    private skillsService: SkillsService,
    private mainPanelDataQuery: MainPanelDataQuery
  ) {}

  ngOnInit() {
    this.skillsService.loadSkills();

    this.isSkillsLoading$ = this.mainPanelDataQuery.selectSkillsLoading();
    this.skills$ = this.mainPanelDataQuery.selectSkills();
  }
}
