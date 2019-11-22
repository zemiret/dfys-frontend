import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivitiesStore } from '@app/main-panel/activities/state';
import {
  createSkill,
  SkillResponse,
} from '@app/main-panel/skills/state/skill.model';
import { SkillListResponse } from '@app/main-panel/state';
import { ID } from '@datorama/akita';
import { CategoriesStore } from '@model/categories';
import { finalize, tap } from 'rxjs/operators';
import { SkillsStore } from './skills.store';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(
    private skillsStore: SkillsStore,
    private categoriesStore: CategoriesStore,
    private activitiesStore: ActivitiesStore,
    private http: HttpClient
  ) {}

  setActive(id: ID | null) {
    this.skillsStore.setActive(id);
  }

  loadSkills() {
    this.skillsStore.setLoading(true);
    this.categoriesStore.setLoading(true);

    return this.http
      .get<SkillListResponse>('api/skills')
      .pipe(
        tap(data => {
          this.skillsStore.set(data.skills);
          this.categoriesStore.set(data.categories);
        }),
        finalize(() => {
          this.skillsStore.setLoading(false);
          this.categoriesStore.setLoading(false);
        })
      )
      .subscribe();
  }

  loadSkill(id: ID) {
    this.skillsStore.setLoading(true);
    this.categoriesStore.setLoading(true);
    this.activitiesStore.setLoading(true);

    return this.http
      .get<SkillResponse>(`api/skills/${id}`)
      .pipe(
        tap(data => {
          this.skillsStore.upsert(
            data.id,
            createSkill({
              id: data.id,
              name: data.name,
              addDate: data.addDate,
            })
          );

          Object.keys(data.categories).forEach(key => {
            this.categoriesStore.add(data.categories[key]);
          });

          Object.keys(data.activities).forEach(key => {
            this.activitiesStore.add(data.activities[key]);
          });
        }),
        finalize(() => {
          this.skillsStore.setLoading(false);
          this.categoriesStore.setLoading(false);
          this.activitiesStore.setLoading(false);
        })
      )
      .subscribe();
  }
}
