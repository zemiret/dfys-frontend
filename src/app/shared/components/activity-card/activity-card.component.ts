import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '@app/main-panel/activities/state';
import { Skill } from '@app/main-panel/skills/state';
import { Category } from '@model/categories';

@Component({
  selector: 'dfys-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent implements OnInit {
  @Input() activity: Activity;
  @Input() category: Category;
  @Input() skill?: Skill;

  constructor() {}

  ngOnInit() {}
}
