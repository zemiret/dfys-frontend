import { Category } from '../../model/categories';
import { Skill } from '../../skills/state';

export interface SkillResponse {
  skills: Skill[];
  categories: Category[];
}
