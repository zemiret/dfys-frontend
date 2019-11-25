import { Component, Input, OnInit } from '@angular/core';
import {
  ActivitiesService,
  Activity,
  ActivityEntry,
} from '@app/main-panel/activities/state';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'dfys-activity-entry-list',
  templateUrl: './activity-entry-list.component.html',
  styleUrls: ['./activity-entry-list.component.scss'],
})
export class ActivityEntryListComponent implements OnInit {
  @Input() activity$: Observable<Activity>;
  entries: ActivityEntry[] = [];
  newEntryComment = '';

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit() {
    this.activity$
      .pipe(
        filter(activity => activity != null),
        first()
      )
      .subscribe(
        activity => (this.entries = this.getEntriesFromActivity(activity))
      );
  }

  private getEntryKey(index: number, entry: ActivityEntry) {
    return entry.id;
  }

  private addEntry() {
    if (this.newEntryComment.length > 0) {
      this.activitiesService.addEntry(this.newEntryComment);
      this.newEntryComment = '';
    }
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
