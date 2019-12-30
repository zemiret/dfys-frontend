import { Injectable } from '@angular/core';
import {
  Activity,
  ActivityEntry,
} from '@app/main-panel/activities/state/activity.model';
import { QueryEntity } from '@datorama/akita';
import { ActivitiesState, ActivitiesStore } from './activities.store';

@Injectable({ providedIn: 'root' })
export class ActivitiesQuery extends QueryEntity<ActivitiesState> {
  constructor(protected store: ActivitiesStore) {
    super(store);
  }

  public getEntriesFromActivity(activity: Activity): ActivityEntry[] {
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
