import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
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
      declarations: [ActivityPanelComponent],
      imports: [ReactiveFormsModule, AngularMaterialModule, SharedModule],
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
