import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '@app/main-panel/activities/state';
import { Skill } from '@app/main-panel/skills/state';
import { Category } from '@model/categories';

@Component({
  selector: 'dfys-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.scss'],
})
export class ActivityPanelComponent implements OnInit {
  @Input() activity: Activity;
  @Input() skill: Skill;
  @Input() category: Category;

  constructor() {}

  ngOnInit() {}
}
