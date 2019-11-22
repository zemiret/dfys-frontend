import { Injectable } from '@angular/core';
import { ActivitiesQuery, Activity } from '@app/main-panel/activities/state';
import { Skill } from '@app/main-panel/skills/state/skill.model';
import { combineQueries, getIDType, ID, QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { CategoriesQuery, Category } from '@model/categories';
import { Observable } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';
import { SkillsState, SkillsStore } from './skills.store';

@Injectable({ providedIn: 'root' })
export class SkillsQuery extends QueryEntity<SkillsState> {
  constructor(
    protected store: SkillsStore,
    private routerQuery: RouterQuery,
    private activitiesQuery: ActivitiesQuery,
    private categoriesQuery: CategoriesQuery
  ) {
    super(store);
  }

  selectSkillList() {
    return this.selectAll({
      sortBy: 'name',
    });
  }

  selectSkillCategories(skillId: getIDType<Skill>): Observable<Category[]> {
    return this.selectEntity(skillId).pipe(
      filter(skill => skill != null),
      map(skill => {
        return this.categoriesQuery.selectMany(skill.categories);
      }),
      flatMap(x => x)
    );
  }

  selectSkillActivities(skillId: ID, categoryId?: ID): Observable<Activity[]> {
    // tslint:disable-next-line:triple-equals
    const filters = [activity => activity.skill == skillId];
    if (categoryId) {
      // tslint:disable-next-line:triple-equals
      filters.push(activity => activity.category == categoryId);
    }

    return this.activitiesQuery.selectAll({
      filterBy: filters,
    });
  }

  isActivityLoading(): Observable<boolean> {
    return combineQueries([
      this.selectLoading(),
      this.activitiesQuery.selectLoading(),
      this.categoriesQuery.selectLoading(),
    ]).pipe(
      map(
        ([actLoading, skillLoading, catLoading]) =>
          actLoading || skillLoading || catLoading
      )
    );
  }
}
