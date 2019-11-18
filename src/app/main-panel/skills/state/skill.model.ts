import { Activity } from '@app/main-panel/activities/state';
import { ID } from '@datorama/akita';
import { Category } from '@model/categories';
import { Modify } from '@shared/types';

export interface Skill {
  id: ID;
  name: string;
  addDate: string;
  categories: ID[];
}

export type DeepSkill = Modify<
  Skill,
  {
    categories: Category[];
  }
>;

export interface SkillResponse {
  id: ID;
  addDate: string;
  name: string;
  categories: {
    [id in ID]: Category;
  };
  activities: {
    [id in ID]: Activity;
  };
}

export function createSkill(params: Partial<Skill>) {
  return {
    id: params.id,
    name: params.name || '',
    addDate: params.addDate || '',
  } as Skill;
}
