import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ActivityEntry,
  createActivtyEntry,
} from '@app/main-panel/activities/state';
import { SubscriptionHandler } from '@shared/subscription-handler';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'dfys-activity-entry',
  templateUrl: './activity-entry.component.html',
  styleUrls: ['./activity-entry.component.scss'],
})
export class ActivityEntryComponent extends SubscriptionHandler
  implements OnInit, AfterViewInit {
  @Input() entry: ActivityEntry;
  @Output() entryChanged = new EventEmitter<ActivityEntry>();

  @ViewChild('commentInput', { static: true }) input: ElementRef;

  constructor() {
    super();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.addSubscription(
      fromEvent<any>(this.input.nativeElement, 'keyup')
        .pipe(
          map(event => event.target.value.trim()),
          debounceTime(400),
          distinctUntilChanged()
        )
        .subscribe(comment => {
          this.entryChanged.emit(
            createActivtyEntry({
              ...this.entry,
              comment,
            })
          );
        })
    );
  }
}
