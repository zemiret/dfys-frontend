import { Component, OnInit } from '@angular/core';
import { SkillsQuery, SkillsService } from '@app/main-panel/skills/state';
import { ID } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Category } from '@model/categories';
import { SubscriptionHandler } from '@shared/subscription-handler';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dfys-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent extends SubscriptionHandler implements OnInit {
  categories$: Observable<Category[]>;
  id: ID;

  constructor(
    private skillsQuery: SkillsQuery,
    private routerQuery: RouterQuery,
    private skillService: SkillsService
  ) {
    super();
  }

  ngOnInit() {
    this.addSkillLoadSubscription();
  }

  selectActivitiesForCategory(category: Category) {
    return this.skillsQuery.selectSkillActivities(this.id, category.id);
  }

  private addSkillLoadSubscription() {
    // TODO: This fires one last time after routing (which is not good...)
    this.addSubscription(
      this.routerQuery
        .selectParams<ID>('id')
        .pipe(filter(id => id != null))
        .subscribe(id => {
          this.setData(id);
        })
    );
  }

  private setData(id: ID) {
    this.skillService.loadSkill(id);
    this.categories$ = this.skillsQuery.selectSkillCategories(id);
    this.id = id;
  }
}
