import { HashMap, ID } from '@datorama/akita';

export interface Category {
  id: ID;
  name: string;
  isBaseCategory: boolean;
}

export type CategoryMap = HashMap<Category>;

export function createCategory(params: Partial<Category>) {
  return {} as Category;
}
