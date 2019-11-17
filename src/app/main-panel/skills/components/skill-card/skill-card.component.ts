import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '@app/main-panel/activities/state';
import { Category } from '@model/categories';

@Component({
  selector: 'dfys-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnInit {
  @Input() activities: Activity[];
  @Input() category: Category;

  constructor() {
  }

  ngOnInit() {
    console.log(this.activities);
    console.log(this.category);
  }

}
