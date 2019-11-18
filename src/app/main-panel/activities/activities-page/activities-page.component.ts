import { Component, OnInit } from '@angular/core';
import { ActivitiesQuery, Activity } from '@app/main-panel/activities/state';
import { Skill, SkillsQuery } from '@app/main-panel/skills/state';
import { ID } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { CategoriesQuery, Category } from '@model/categories';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'dfys-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss'],
})
export class ActivitiesPageComponent implements OnInit {
  activity$: Observable<Activity>;
  skill$: Observable<Skill>;
  category$: Observable<Category>;

  constructor(
    private routerQuery: RouterQuery,
    private skillsQuery: SkillsQuery,
    private categoriesQuery: CategoriesQuery,
    private activityQuery: ActivitiesQuery
  ) {}

  ngOnInit() {
    // TODO: Data loading (http). E.g. assuming it's entry route

    this.loadData();
  }

  private loadData() {
    this.routerQuery
      .selectParams<ID>('id')
      .pipe(filter(id => id != null))
      .subscribe(id => {
        this.setData(id);
      })
      .unsubscribe();
  }

  private setData(id: ID) {
    this.activity$ = this.activityQuery.selectEntity(id);
    this.activity$.pipe(
      map(activity => {
        this.skill$ = this.skillsQuery.selectEntity(activity.skill);
        this.category$ = this.categoriesQuery.selectEntity(activity.category);
      })
    );
  }
}
