import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActivitiesQuery,
  ActivitiesService,
  Activity,
} from '@app/main-panel/activities/state';
import {
  Skill,
  SkillsQuery,
  SkillsService,
} from '@app/main-panel/skills/state';
import { HashMap, ID } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import {
  CategoriesQuery,
  CategoriesService,
  Category,
} from '@model/categories';
import { SubscriptionHandler } from '@shared/subscription-handler';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

@Component({
  selector: 'dfys-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss'],
})
export class ActivitiesPageComponent extends SubscriptionHandler
  implements OnInit {
  id: ID;
  activity$: Observable<Activity>;
  skills$: Observable<HashMap<Skill>>;
  categories$: Observable<HashMap<Category>>;

  constructor(
    private routerQuery: RouterQuery,
    private skillsQuery: SkillsQuery,
    private categoriesQuery: CategoriesQuery,
    private activitiesQuery: ActivitiesQuery,
    private activitiesService: ActivitiesService,
    private skillsService: SkillsService,
    private categoriesService: CategoriesService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.skillsService.loadSkills();

    this.routerQuery
      .selectParams<ID>('id')
      .pipe(filter(id => id != null))
      .subscribe(id => {
        this.id = id;
        this.activitiesService.loadActivity(id);
        this.setData(id);
      })
      .unsubscribe();
  }

  private setData(id: ID) {
    this.skills$ = this.skillsQuery.selectAll({ asObject: true });
    this.categories$ = this.categoriesQuery.selectAll({ asObject: true });
    this.activity$ = this.activitiesQuery.selectEntity(id);

    this.addSubscription(
      this.activity$
        .pipe(filter(activity => activity != null))
        .subscribe(activity => {
          this.skillsService.setActive(activity.skill);
          this.categoriesService.setActive(activity.category);
        })
    );
  }

  private navigateBack() {
    this.skillsQuery
      .selectActiveId()
      .pipe(
        filter(id => id != null),
        first(),
        tap(skillId => this.router.navigate(['/main-panel/skills', skillId]))
      )
      .subscribe();
  }
}
