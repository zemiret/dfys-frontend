import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  ActivitiesQuery,
  ActivitiesService,
  Activity,
  createActivity,
} from '@app/main-panel/activities/state';
import { Skill, SkillsQuery } from '@app/main-panel/skills/state';
import { HashMap } from '@datorama/akita';
import { Category } from '@model/categories';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

// TODO: FIx this component template, maybe? (untyped variables)

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

  activityForm = this.fb.group({
    title: ['', Validators.required],
    description: '',
    skill: [-1, Validators.required],
    category: [-1, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private activitiesQuery: ActivitiesQuery,
    private skillsQuery: SkillsQuery,
    private activitiesService: ActivitiesService
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

  onSubmit() {
    console.log('TODO: Submit!');
    if (this.activityForm.valid && this.activityForm.touched) {
      this.activitiesService.addActivity(
        createActivity(this.activityForm.value)
      );
    }
  }

  get title() {
    return this.activityForm.get('title');
  }

  get description() {
    return this.activityForm.get('description');
  }

  get skill() {
    return this.activityForm.get('skill');
  }

  get category() {
    return this.activityForm.get('category');
  }
}
