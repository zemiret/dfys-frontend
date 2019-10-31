import { ID } from '@datorama/akita';
import { Category } from '../../model/categories';

export interface Skill {
  id: ID;
  name: string;
  addDate: string;
  categories: ID[];
}

export interface SkillListResponse {
  skills: { [id: string]: Skill };
  categories: { [id: string]: Category };
}

export type DeepSkill = Skill & {
  categories: Category[];
};

export function createSkill(params: Partial<Skill>) {
  return {
    id: params.id,
    name: params.name || '',
    addDate: params.addDate || '',
  } as Skill;
}
