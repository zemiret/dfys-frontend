import { Injectable } from '@angular/core';
import { combineQueries } from '@datorama/akita';
import { CategoriesQuery } from '@model/categories';
import { Observable, zip } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DeepSkill, SkillsQuery } from '../skills/state';

@Injectable({ providedIn: 'root' })
export class MainPanelDataQuery {
  constructor(
    private skillsQuery: SkillsQuery,
    private categoriesQuery: CategoriesQuery
  ) {}

  selectSkillsLoading(): Observable<boolean> {
    return zip(
      this.skillsQuery.selectLoading(),
      this.categoriesQuery.selectLoading()
    ).pipe(
      map(
        ([skillsLoading, categoriesLoading]) =>
          skillsLoading && categoriesLoading
      )
    );
  }

  selectSkills(): Observable<DeepSkill[]> {
    return combineQueries([
      this.skillsQuery.selectSkillList(),
      this.categoriesQuery.selectAll({ asObject: true }),
    ]).pipe(
      filter(([skills, categories]) => skills != null && categories != null),
      map(([skills, categories]) => {
        return skills.map(skill => ({
          ...skill,
          categories: skill.categories
            .map(id => categories[id])
            .sort((cat1, cat2) =>
              cat1.displayOrder < cat2.displayOrder ? -1 : 1
            ),
        }));
      })
    );
  }
}
