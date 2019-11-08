import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CategoriesStore } from './categories.store';
import { CategoryMap } from './category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  constructor(
    private categoriesStore: CategoriesStore,
    private http: HttpClient
  ) {}

  loadList() {
    this.categoriesStore.setLoading(true);

    return this.http
      .get<CategoryMap>('/api/categories')
      .pipe(finalize(() => this.categoriesStore.setLoading(false)))
      .subscribe(listResponse => this.categoriesStore.set(listResponse));
  }
}
