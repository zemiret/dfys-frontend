import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HashMap, ID } from '@datorama/akita';
import { Endpoints } from '@shared/constants/endpoints';
import { finalize } from 'rxjs/operators';
import { ActivitiesStore } from './activities.store';
import { Activity, ActivityEntry } from './activity.model';

@Injectable({ providedIn: 'root' })
export class ActivitiesService {
  constructor(
    private activitiesStore: ActivitiesStore,
    private http: HttpClient
  ) {}

  loadRecent() {
    this.activitiesStore.setLoading(true);

    return this.http
      .get<HashMap<Activity>>(`${Endpoints.RECENT_ACTIVITIES}`)
      .pipe(finalize(() => this.activitiesStore.setLoading(false)))
      .subscribe(data => this.activitiesStore.set(data));
  }

  loadActivity(id: ID) {
    this.activitiesStore.setLoading(true);

    return this.http
      .get<Activity>(`${Endpoints.ACTIVITIES}/${id}`)
      .pipe(finalize(() => this.activitiesStore.setLoading(false)))
      .subscribe(data => this.activitiesStore.upsert(data.id, data));
  }

  addActivity(activity: Activity) {
    // TODO: Assert it's working when authorization is implemented
    this.activitiesStore.setLoading(true);

    return this.http
      .post<Activity>(`${Endpoints.ACTIVITIES}`, { ...activity })
      .pipe(finalize(() => this.activitiesStore.setLoading(false)))
      .subscribe(addedActivity => {
        this.activitiesStore.add(activity);
      });
  }

  addEntry(activityId: ID, comment: string) {
    // TODO: Assert it's working when authorization is implemented
    // TODO: When backend is fixed, remove sending activity in here
    this.activitiesStore.setLoading(true);

    return this.http
      .post<ActivityEntry>(
        `${Endpoints.ACTIVITIES}/${activityId}/${Endpoints.ENTRIES}/`,
        {
          comment,
          activity: activityId,
        }
      )
      .pipe(finalize(() => this.activitiesStore.setLoading(false)))
      .subscribe(entry =>
        this.activitiesStore.update(activityId, activity => ({
          ...activity,
          entries: {
            ...activity.entries,
            entry,
          },
        }))
      );
  }

  public updateEntry(activityId: ID, entry: ActivityEntry) {
    // TODO: Assert it's working when authorization is implemented

    return this.http
      .put<ActivityEntry>(
        `${Endpoints.ACTIVITIES}/${activityId}/${Endpoints.ENTRIES}/${entry.id}/`,
        {
          comment: entry.comment,
        }
      )
      .pipe(finalize(() => this.activitiesStore.setLoading(false)))
      .subscribe(updatedEntry =>
        this.activitiesStore.update(activityId, activity => ({
          ...activity,
          entries: {
            ...activity.entries,
            updatedEntry,
          },
        }))
      );
  }
}
