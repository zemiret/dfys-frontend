import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SkillsState, SkillsStore } from './skills.store';

@Injectable({ providedIn: 'root' })
export class SkillsQuery extends QueryEntity<SkillsState> {
  constructor(protected store: SkillsStore) {
    super(store);
  }

  selectSkillList() {
    return this.selectAll({
      sortBy: 'name',
    });
  }
}
