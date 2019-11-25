import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivityEntry } from '@app/main-panel/activities/state';

@Component({
  selector: 'dfys-activity-entry',
  templateUrl: './activity-entry.component.html',
  styleUrls: ['./activity-entry.component.scss'],
})
export class ActivityEntryComponent implements OnInit {
  @Input() entry: ActivityEntry;
  @Output() entryChanged: EventEmitter<ActivityEntry>;

  constructor() {}

  ngOnInit() {}
}
