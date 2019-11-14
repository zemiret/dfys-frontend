import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesStore } from '@model/categories';
import { finalize } from 'rxjs/operators';
import { SkillsStore } from '../skills/state';
import { SkillResponse } from './main-panel-data.model';

@Injectable({ providedIn: 'root' })
export class MainPanelDataService {
  constructor(
    private http: HttpClient,
    private skillsStore: SkillsStore,
    private categoriesStore: CategoriesStore
  ) {}

  loadSkills() {
    this.skillsStore.setLoading(true);
    this.categoriesStore.setLoading(true);

    return this.http
      .get<SkillResponse>('api/skills')
      .pipe(
        finalize(() => {
          this.skillsStore.setLoading(false);
          this.categoriesStore.setLoading(false);
        })
      )
      .subscribe(data => {
        this.skillsStore.set(data.skills);
        this.categoriesStore.set(data.categories);
      });
  }
}
