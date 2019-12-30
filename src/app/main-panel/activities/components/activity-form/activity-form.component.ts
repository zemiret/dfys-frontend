import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Activity } from '@app/main-panel/activities/state';
import { Skill } from '@app/main-panel/skills/state';
import { HashMap } from '@datorama/akita';
import { Category } from '@model/categories';
import { Observable, of, zip } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';

interface ActivityFormData {
  activity: Activity;
  skills: HashMap<Skill>;
  categories: HashMap<Category>;
}

@Component({
  selector: 'dfys-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss'],
})
export class ActivityFormComponent implements OnInit {
  @Input() activity$: Observable<Activity>;
  @Input() skills$: Observable<HashMap<Skill>>;
  @Input() categories$: Observable<HashMap<Category>>;
  @Input() isLoading$: Observable<boolean>;

  @Output() activitySubmit = new EventEmitter<Activity>();

  data$: Observable<ActivityFormData>;

  activityForm = this.fb.group({
    title: ['', Validators.required],
    description: '',
    skill: [-1, Validators.required],
    category: [-1, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.data$ = zip(this.activity$, this.skills$, this.categories$).pipe(
      map(([activity, skills, categories]) => ({
        activity,
        skills,
        categories,
      }))
    );

    this.setFormValues();
  }

  onSubmit() {
    if (this.activityForm.valid && this.activityForm.touched) {
      this.activitySubmit.emit(this.activityForm.value);
    }
  }

  private setFormValues() {
    this.activity$.pipe(first()).subscribe(activity => {
      this.activityForm.setValue({
        title: activity.title,
        description: activity.description,
        skill: activity.skill,
        category: activity.category,
      });
    });
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
