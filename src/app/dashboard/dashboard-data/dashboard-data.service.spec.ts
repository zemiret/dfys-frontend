import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CategoriesQuery, CategoriesService } from '../../model/categories';
import { SkillsQuery, SkillsService } from '../../skills/state';

import { DashboardDataService } from './dashboard-data.service';

describe('DashboardDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [
      SkillsService,
      SkillsQuery,
      CategoriesService,
      CategoriesQuery,
    ],
  }));

  it('should be created', () => {
    const service: DashboardDataService = TestBed.get(DashboardDataService);
    expect(service).toBeTruthy();
  });
});
