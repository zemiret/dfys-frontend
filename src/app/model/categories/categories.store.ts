import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Category } from './category.model';

export interface CategoriesState extends EntityState<Category> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'categories' })
export class CategoriesStore extends EntityStore<CategoriesState> {
  constructor() {
    super();
  }
}
