import { ID } from '@datorama/akita';
import { Category } from '@model/categories';
import { Modify } from '@shared/types';
import { Skill } from '../../skills/state';

export interface Activity {
  id: ID;
  addDate: string;
  modifyDate: string;
  title: string;
  description: string;
  category: ID;
  skill: ID;
}

export type DeepActivity = Modify<
  Activity,
  {
    category: Category;
    skill: Skill;
  }
>;

export function createActivity(params: Partial<Activity>) {
  return {
    id: params.id || -1,
    addDate: params.addDate || '',
    modifyDate: params.addDate || '',
    title: params.title || '',
    description: params.description || '',
    category: params.category || -1,
    skill: params.category || -1,
  } as Activity;
}
