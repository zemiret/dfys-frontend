import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
import {
  ActivityEntryComponent,
  ActivityEntryListComponent,
  ActivityFormComponent,
} from '@app/main-panel/activities/components';
import {
  Activity,
  ActivityEntry,
  createActivity,
} from '@app/main-panel/activities/state';
import { Skill } from '@app/main-panel/skills/state';
import { HashMap } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Category } from '@model/categories';
import { SharedModule } from '@shared/shared.module';
import { Observable, of } from 'rxjs';

import { ActivityPanelComponent } from './activity-panel.component';

describe('ActivityPanelComponent', () => {
  let component: ActivityPanelComponent;
  let fixture: ComponentFixture<ActivityPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivityPanelComponent,
        ActivityEntryListComponent,
        ActivityEntryComponent,
        ActivityFormComponent,
      ],
      imports: [
        ReactiveFormsModule,
        AngularMaterialModule,
        SharedModule,
        FormsModule,
        HttpClientTestingModule,
      ],
      providers: [RouterQuery],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPanelComponent);
    component = fixture.componentInstance;
    component.id$ = of();
    component.activity$ = of(createActivity({}));
    component.skills$ = of();
    component.categories$ = of();
    component.isLoading$ = of();
    component.activityEntries$ = of();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
