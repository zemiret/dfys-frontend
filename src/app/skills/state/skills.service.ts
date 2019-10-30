import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SkillListResponse } from './skill.model';
import { SkillsStore } from './skills.store';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private skillsStore: SkillsStore, private http: HttpClient) {}

  loadList() {
    this.skillsStore.setLoading(true);

    this.http
      .get<SkillListResponse>('/api/skills')
      .pipe(finalize(() => this.skillsStore.setLoading(false)))
      .subscribe(listResponse => this.skillsStore.set(listResponse.skills));
  }
}
