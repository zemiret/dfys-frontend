import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesStore } from '@model/categories';
import { SkillsStore } from '../skills/state';

@Injectable({ providedIn: 'root' })
export class MainPanelDataService {
  constructor(
    private http: HttpClient,
    private skillsStore: SkillsStore,
    private categoriesStore: CategoriesStore
  ) {}
}
