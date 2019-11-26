import { Component, Input, OnInit } from '@angular/core';
import {
  ActivitiesService,
  Activity,
  ActivityEntry,
} from '@app/main-panel/activities/state';
import { SubscriptionHandler } from '@shared/subscription-handler';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'dfys-activity-entry-list',
  templateUrl: './activity-entry-list.component.html',
  styleUrls: ['./activity-entry-list.component.scss'],
})
export class ActivityEntryListComponent extends SubscriptionHandler
  implements OnInit {
  @Input() activity$: Observable<Activity>;
  entries: ActivityEntry[] = [];
  newEntryComment = '';

  constructor(private activitiesService: ActivitiesService) {
    super();
  }

  ngOnInit() {
    this.addSubscription(
      this.activity$
        .pipe(filter(activity => activity != null))
        .subscribe(
          activity => (this.entries = this.getEntriesFromActivity(activity))
        )
    );
  }

  private getEntryKey(index: number, entry: ActivityEntry) {
    return entry.id;
  }

  private addEntry() {
    if (this.newEntryComment.length > 0) {
      this.activity$
        .pipe(
          filter(act => act != null),
          first()
        )
        .subscribe(activity => {
          this.activitiesService.addEntry(activity.id, this.newEntryComment);
          this.newEntryComment = '';
        });
    }
  }

  private onEntryChange(modifiedEntry) {
    this.activity$
      .pipe(
        filter(act => act != null),
        first()
      )
      .subscribe(activity => {
        this.activitiesService.updateEntry(activity.id, modifiedEntry);
      });
  }

  private getEntriesFromActivity(activity: Activity): ActivityEntry[] {
    if (activity == null || activity.entries == null) {
      return [];
    }

    const entriesArray = Object.keys(activity.entries).reduce((acc, key) => {
      acc.push(activity.entries[key]);
      return acc;
    }, []);

    return entriesArray.sort((a, b) => {
      const dateA = new Date(a.modifyDate);
      const dateB = new Date(b.modifyDate);

      return dateA.getTime() < dateB.getTime() ? 1 : -1;
    });
  }
}
