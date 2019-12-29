import { HashMap, ID } from '@datorama/akita';

export interface Category {
  id: ID;
  name: string;
  isBaseCategory: boolean;
  displayOrder: number;
}

export type CategoryMap = HashMap<Category>;

export function createCategory(params: Partial<Category>) {
  return {} as Category;
}
