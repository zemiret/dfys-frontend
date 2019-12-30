import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsQuery } from '@app/main-panel/skills/state';
import { ID } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Routes } from '@shared/constants/routes';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

@Component({
  selector: 'dfys-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss'],
})
export class ActivitiesPageComponent implements OnInit {
  id$: Observable<ID>;

  constructor(
    private routerQuery: RouterQuery,
    private skillsQuery: SkillsQuery,
    private router: Router
  ) {}

  ngOnInit() {
    this.id$ = this.routerQuery
      .selectParams<ID>('id')
      .pipe(filter(id => id != null));
  }

  private navigateToSkill() {
    this.skillsQuery
      .selectActiveId()
      .pipe(
        filter(id => id != null),
        first(),
        tap(skillId => this.router.navigate([Routes.SKILLS, skillId]))
      )
      .subscribe();
  }
}
