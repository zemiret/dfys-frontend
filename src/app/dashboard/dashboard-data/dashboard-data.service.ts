import { Injectable } from '@angular/core';
import { combineQueries } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { CategoriesQuery, CategoriesService } from '../../model/categories';
import { SkillsQuery, SkillsService } from '../../skills/state';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  constructor(private skillsService: SkillsService,
              private skillsQuery: SkillsQuery,
              private categoriesService: CategoriesService,
              private categoriesQuery: CategoriesQuery) {
  }

  loadData() {
    this.skillsService.loadList();
    this.categoriesService.loadList();
  }

  getData() {
    return combineQueries([
      this.skillsQuery.selectSkillList(),
      this.categoriesQuery.selectAll(),
    ]).pipe(
      map(([skills, categories]) => {
        return skills.map(skill => {
          return {
            ...skill,
            categories: skill.categories.map(id => categories[id]),
          };
        });
      }),
    );
  }
}
