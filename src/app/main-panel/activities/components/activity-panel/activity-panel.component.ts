import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivitiesQuery, Activity } from '@app/main-panel/activities/state';
import { Skill, SkillsQuery } from '@app/main-panel/skills/state';
import { HashMap } from '@datorama/akita';
import { Category } from '@model/categories';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'dfys-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.scss'],
})
export class ActivityPanelComponent implements OnInit {
  @Input() activity$: Observable<Activity>;
  @Input() skills$: Observable<HashMap<Skill>>;
  @Input() categories$: Observable<HashMap<Category>>;
  isLoading$: Observable<boolean>;

  activityForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    skill: new FormControl(-1),
    category: new FormControl(-1),
  });

  constructor(
    private activitiesQuery: ActivitiesQuery,
    private skillsQuery: SkillsQuery
  ) {}

  ngOnInit() {
    this.isLoading$ = this.skillsQuery.isActivityLoading();

    this.activity$
      .pipe(
        filter(activity => activity != null),
        first()
      )
      .subscribe(activity => {
        this.activityForm.setValue({
          title: activity.title,
          description: activity.description,
          skill: activity.skill,
          category: activity.category,
        });
      });
  }
}
