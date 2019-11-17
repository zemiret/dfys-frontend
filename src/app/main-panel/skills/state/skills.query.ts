import { Injectable } from '@angular/core';
import { ActivitiesQuery } from '@app/main-panel/activities/state';
import { ID, QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { CategoriesQuery, Category } from '@model/categories';
import { Observable } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';
import { SkillsState, SkillsStore } from './skills.store';

@Injectable({ providedIn: 'root' })
export class SkillsQuery extends QueryEntity<SkillsState> {
  constructor(protected store: SkillsStore,
              private routerQuery: RouterQuery,
              private activitiesQuery: ActivitiesQuery,
              private categoriesQuery: CategoriesQuery) {
    super(store);
  }

  selectSkillList() {
    return this.selectAll({
      sortBy: 'name',
    });
  }

  selectSkillCategories(skillId: ID): Observable<Category[]> {
    return this.selectEntity(skillId).pipe(
      filter(skill => skill != null),
      map(skill => {
        return this.categoriesQuery.selectMany(skill.categories);
      }),
      flatMap(x => x)
    );
  }

  selectSkillActivities(skillId: ID, categoryId?: ID) {
    // TODO: FIX THIS!
    // For some reason filtering the activity to skill leaves us with empty list.
    const filters = [
      activity => activity.skill === skillId,
    ];
    if (categoryId) {
      filters.push(
        activity => activity.category === categoryId
      );
    }

    return this.activitiesQuery.selectAll({
      filterBy: filters,
    });
  }
}
