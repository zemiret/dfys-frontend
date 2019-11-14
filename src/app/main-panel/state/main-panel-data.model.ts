import { Skill } from '@app/main-panel/skills/state';
import { Category } from '@model/categories';

export interface SkillResponse {
  skills: Skill[];
  categories: Category[];
}
