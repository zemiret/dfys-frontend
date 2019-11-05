import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkillsStore } from './skills.store';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private skillsStore: SkillsStore, private http: HttpClient) {}
}
