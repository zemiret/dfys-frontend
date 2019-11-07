import { Component, Input, OnInit } from '@angular/core';
import { DeepActivity } from '../../activities/state';

@Component({
  selector: 'dfys-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent implements OnInit {
  @Input() activity: DeepActivity;

  constructor() {
  }

  ngOnInit() {
  }
}
