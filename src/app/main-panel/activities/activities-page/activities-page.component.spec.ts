import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createAotCompiler } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { ActivityPanelComponent } from '@app/main-panel/activities/components/activity-panel/activity-panel.component';
import { createActivity } from '@app/main-panel/activities/state';
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
      ],
      declarations: [ActivitiesPageComponent, ActivityPanelComponent],
      providers: [RouterQuery],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesPageComponent);
    component = fixture.componentInstance;
    component.activity$ = of(createActivity({}));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
