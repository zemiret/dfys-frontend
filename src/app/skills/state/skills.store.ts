import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Skill } from './skill.model';

export interface SkillsState extends EntityState<Skill> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'skills' })
export class SkillsStore extends EntityStore<SkillsState> {
  constructor() {
    super();
  }
}
