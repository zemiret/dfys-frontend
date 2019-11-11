import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HashMap } from '@datorama/akita';
import { finalize } from 'rxjs/operators';
import { ActivitiesStore } from './activities.store';
import { Activity } from './activity.model';

@Injectable({ providedIn: 'root' })
export class ActivitiesService {
  constructor(
    private activitiesStore: ActivitiesStore,
    private http: HttpClient
  ) {}

  loadRecent() {
    this.activitiesStore.setLoading(true);

    return this.http
      .get<HashMap<Activity>>('api/activities/recent')
      .pipe(finalize(() => this.activitiesStore.setLoading(false)))
      .subscribe(data => this.activitiesStore.set(data));
  }
}
