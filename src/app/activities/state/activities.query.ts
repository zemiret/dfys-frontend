import { Injectable } from '@angular/core';
import { combineQueries, QueryEntity } from '@datorama/akita';
import { from, Observable, of } from 'rxjs';
import { flatMap, map, mergeAll, scan } from 'rxjs/operators';
import { CategoriesQuery } from '../../model/categories';
import { SkillsQuery } from '../../skills/state';
import { ActivitiesState, ActivitiesStore } from './activities.store';
import { Activity, DeepActivity } from './activity.model';

@Injectable({ providedIn: 'root' })
export class ActivitiesQuery extends QueryEntity<ActivitiesState> {
  constructor(
    protected store: ActivitiesStore,
    protected categoriesQuery: CategoriesQuery,
    protected skillsQuery: SkillsQuery,
  ) {
    super(store);
  }

  selectDeepActivityList(): Observable<DeepActivity[]> {
    return this.selectAll().pipe(
      flatMap(x => x),
      map(activity => this.deepenActivity(of(activity))),
      mergeAll(),
      scan<DeepActivity>((acc, val) => acc.concat(val), []),
    );
  }

  private deepenActivity(normalizedActivity: Observable<Activity>): Observable<DeepActivity> {
    return normalizedActivity.pipe(
      map(activity => {
        return combineQueries([
          this.categoriesQuery.selectEntity(activity.category),
          this.skillsQuery.selectEntity(activity.skill),
        ]).pipe(
          map(([category, skill]) => ({
            ...activity,
            category,
            skill,
          })),
        );
      }),
      flatMap(x => from(x)),
    );
  }
}
