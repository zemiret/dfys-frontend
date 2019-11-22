import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';
import { Skill } from './skill.model';

export interface SkillsState extends EntityState<Skill>, ActiveState {}

const initialState = {
  active: null,
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'skills' })
export class SkillsStore extends EntityStore<SkillsState> {
  constructor() {
    super(initialState);
  }
}
