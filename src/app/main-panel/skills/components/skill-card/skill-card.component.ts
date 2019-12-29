import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '@app/main-panel/activities/state';
import { Category } from '@model/categories';
import { Routes } from '@shared/constants/routes';

@Component({
  selector: 'dfys-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnInit {
  @Input() activities: Activity[];
  @Input() category: Category;

  private activitiesLink = Routes.ACTIVITIES;

  constructor() {}

  ngOnInit() {}
}
