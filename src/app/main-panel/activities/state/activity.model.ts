import { HashMap, ID } from '@datorama/akita';

export type ActivityEntryContent = string;

export interface ActivityEntry {
  id: ID;
  addDate: string;
  modifyDate: string;
  comment: ActivityEntryContent;
}

export interface Activity {
  id: ID;
  addDate: string;
  modifyDate: string;
  title: string;
  description: string;
  category: ID;
  skill: ID;
  entries?: HashMap<ActivityEntry>;
}

export function createActivity(params: Partial<Activity>) {
  return {
    id: params.id || -1,
    addDate: params.addDate || '',
    modifyDate: params.addDate || '',
    title: params.title || '',
    description: params.description || '',
    category: params.category || -1,
    skill: params.category || -1,
    entries: params.entries || {},
  } as Activity;
}

export function createActivtyEntry(params: Partial<ActivityEntry>) {
  return {
    id: params.id || -1,
    addDate: params.addDate || '',
    modifyDate: params.modifyDate || '',
    comment: params.comment || '',
  };
}
