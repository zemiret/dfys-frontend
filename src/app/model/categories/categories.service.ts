import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesStore } from './categories.store';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  constructor(private categoriesStore: CategoriesStore, private http: HttpClient) {}

  //  get() {
  //    return this.http.get('').pipe(tap(entities => this.categoriesStore.set(entities)));
  //  }
}
