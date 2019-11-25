import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
import {
  ActivityEntryComponent,
  ActivityEntryListComponent,
} from '@app/main-panel/activities/components';
import { createActivity } from '@app/main-panel/activities/state';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

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
    component.activity$ = of(createActivity({}));
    component.skills$ = of();
    component.categories$ = of();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
