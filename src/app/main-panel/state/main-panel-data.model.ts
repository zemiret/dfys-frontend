import { Skill } from '@app/main-panel/skills/state';
import { Category } from '@model/categories';

export interface SkillListResponse {
  skills: Skill[];
  categories: Category[];
}

