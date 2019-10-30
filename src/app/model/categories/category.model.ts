import { ID } from '@datorama/akita';

export interface Category {
  id: ID;
  name: string;
  isBaseCategory: boolean;
}

export function createCategory(params: Partial<Category>) {
  return {} as Category;
}
