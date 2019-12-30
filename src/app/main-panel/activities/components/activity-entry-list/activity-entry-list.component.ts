import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ActivitiesService,
  Activity,
  ActivityEntry,
  ActivityEntryContent,
} from '@app/main-panel/activities/state';
import { SubscriptionHandler } from '@shared/subscription-handler';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

// TODO: Make this dumb. No requirement for service

@Component({
  selector: 'dfys-activity-entry-list',
  templateUrl: './activity-entry-list.component.html',
  styleUrls: ['./activity-entry-list.component.scss'],
})
export class ActivityEntryListComponent extends SubscriptionHandler
  implements OnInit {
  @Input() activity$: Observable<Activity>;
  @Input() entries$: Observable<ActivityEntry[]>;

  @Output() entryAdd = new EventEmitter<ActivityEntryContent>();
  @Output() entryChange = new EventEmitter<ActivityEntry>();

  private newEntryComment = '';

  constructor() {
    super();
  }

  ngOnInit() {}

  private getEntryKey(index: number, entry: ActivityEntry) {
    return entry.id;
  }

  private onEntryAddClick() {
    if (this.newEntryComment.length > 0) {
      this.entryAdd.emit(this.newEntryComment);
      this.newEntryComment = '';
    }
  }

  private onEntryChange(modifiedEntry) {
    this.entryChange.emit(modifiedEntry);
  }
}
