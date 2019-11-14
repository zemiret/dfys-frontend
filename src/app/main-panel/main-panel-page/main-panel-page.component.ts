import { Component, OnInit } from '@angular/core';
import { DeepSkill } from '@app/main-panel/skills/state';
import { MainPanelDataQuery } from '@app/main-panel/state/main-panel-data.query';
import { MainPanelDataService } from '@app/main-panel/state/main-panel-data.service';
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
    private mainPanelDataService: MainPanelDataService,
    private mainPanelDataQuery: MainPanelDataQuery
  ) { }

  ngOnInit() {
    this.mainPanelDataService.loadSkills();

    this.isSkillsLoading$ = this.mainPanelDataQuery.selectSkillsLoading();
    this.skills$ = this.mainPanelDataQuery.selectSkills();
  }

}
