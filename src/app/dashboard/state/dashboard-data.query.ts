import { Injectable } from '@angular/core';
import { combineQueries } from '@datorama/akita';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoriesQuery } from '../../model/categories';
import { DeepSkill, SkillsQuery } from '../../skills/state';

@Injectable({ providedIn: 'root' })
export class DashboardDataQuery {

  constructor(private skillsQuery: SkillsQuery,
              private categoriesQuery: CategoriesQuery) {
  }

  selectSkillsLoading(): Observable<boolean> {
    return zip(this.skillsQuery.selectLoading(), this.categoriesQuery.selectLoading())
      .pipe(
        map(([skillsLoading, categoriesLoading]) => skillsLoading && categoriesLoading),
      );
  }

  selectSkills(): Observable<DeepSkill[]> {
    return combineQueries([
      this.skillsQuery.selectSkillList(),
      this.categoriesQuery.selectAll({ asObject: true })],
    )
      .pipe(
        map(([skills, categories]) => {
          return skills.map(skill => ({
            ...skill,
            categories: skill.categories.map(id => categories[id]),
          }));
        }),
      );
  }
}
