import { Component, Input, OnInit } from '@angular/core';
import {
  ActivitiesQuery,
  ActivitiesService,
  Activity,
  ActivityEntry,
  ActivityEntryContent,
  createActivity,
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
import { filter, first, map } from 'rxjs/operators';

@Component({
  selector: 'dfys-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.scss'],
})
export class ActivityPanelComponent extends SubscriptionHandler
  implements OnInit {
  @Input() id$: Observable<ID>;

  activity$: Observable<Activity>;
  skills$: Observable<HashMap<Skill>>;
  categories$: Observable<HashMap<Category>>;
  isLoading$: Observable<boolean>;
  activityEntries$: Observable<ActivityEntry[]>;

  constructor(
    private activitiesQuery: ActivitiesQuery,
    private skillsQuery: SkillsQuery,
    private skillsService: SkillsService,
    private routerQuery: RouterQuery,
    private activitiesService: ActivitiesService,
    private categoriesService: CategoriesService,
    private categoriesQuery: CategoriesQuery
  ) {
    super();
  }

  ngOnInit() {
    this.isLoading$ = this.skillsQuery.isActivityLoading();

    this.id$
      .pipe(
        filter(id => id != null),
        first()
      )
      .subscribe(id => {
        this.loadData(id);
        this.setData(id);
      });
  }

  private loadData(id: ID) {
    this.skillsService.loadSkills();
    this.activitiesService.loadActivity(id);
  }

  private setData(id: ID) {
    this.skills$ = this.skillsQuery
      .selectAll({ asObject: true })
      .pipe(filter(a => a != null));
    this.categories$ = this.categoriesQuery
      .selectAll({ asObject: true })
      .pipe(filter(a => a != null));
    this.activity$ = this.activitiesQuery
      .selectEntity(id)
      .pipe(filter(a => a != null));

    this.activityEntries$ = this.activity$.pipe(
      map(activity => this.activitiesQuery.getEntriesFromActivity(activity))
    );

    this.addSubscription(
      this.activity$.subscribe(activity => {
        this.skillsService.setActive(activity.skill);
        this.categoriesService.setActive(activity.category);
      })
    );
  }

  private onActivitySubmit(activity: Partial<Activity>) {
    this.activitiesService.addActivity(createActivity(activity));
  }

  private onEntryAdd(content: ActivityEntryContent) {
    this.activity$.pipe(first()).subscribe(activity => {
      this.activitiesService.addEntry(activity.id, content);
    });
  }

  private onEntryChange(entry: ActivityEntry) {
    this.activity$.pipe(first()).subscribe(activity => {
      this.activitiesService.updateEntry(activity.id, entry);
    });
  }
}
