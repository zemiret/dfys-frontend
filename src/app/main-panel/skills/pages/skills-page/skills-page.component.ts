import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  Skill,
  SkillsQuery,
  SkillsService,
} from '@app/main-panel/skills/state';
import { ID } from '@datorama/akita';
import { Category } from '@model/categories';
import { RouteNames } from '@shared/constants/routes';
import { SubscriptionHandler } from '@shared/subscription-handler';
import { interval, Observable } from 'rxjs';
import { filter, map, switchMap, throttle } from 'rxjs/operators';

@Component({
  selector: 'dfys-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent extends SubscriptionHandler implements OnInit {
  categories$: Observable<Category[]>;
  skill$: Observable<Skill>;
  id: ID;

  constructor(
    private skillsQuery: SkillsQuery,
    private skillService: SkillsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();

    this.addSubscription(
      this.router.events
        .pipe(
          filter(evt => evt instanceof NavigationEnd),
          switchMap(() =>
            this.route.url.pipe(map(segments => segments.join('/')))
          ),
          filter(url => url.includes(RouteNames.SKILLS)),
          switchMap(() => this.route.params.pipe(map(p => p.id))),
          throttle(() => interval(50))
        )
        .subscribe(id => this.setData(id))
    );
  }

  ngOnInit() {}

  selectActivitiesForCategory(category: Category) {
    return this.skillsQuery.selectSkillActivities(this.id, category.id);
  }

  private setData(id: ID) {
    this.skillService.loadSkill(id);
    this.categories$ = this.skillsQuery.selectSkillCategories(id);
    this.skill$ = this.skillsQuery.selectEntity(id);
    this.id = id;
  }
}
