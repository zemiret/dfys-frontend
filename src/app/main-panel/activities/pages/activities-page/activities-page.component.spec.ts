import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import {
  ActivityEntryComponent,
  ActivityEntryListComponent,
  ActivityFormComponent,
} from '@app/main-panel/activities/components';
import { ActivityPanelComponent } from '@app/main-panel/activities/smarts';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { ActivitiesPageComponent } from './activities-page.component';

describe('ActivitiesPageComponent', () => {
  let component: ActivitiesPageComponent;
  let fixture: ComponentFixture<ActivitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule,
        FormsModule,
      ],
      declarations: [
        ActivitiesPageComponent,
        ActivityPanelComponent,
        ActivityFormComponent,
        ActivityEntryListComponent,
        ActivityEntryComponent,
      ],
      providers: [RouterQuery],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesPageComponent);
    component = fixture.componentInstance;
    component.id$ = of();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
