import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/angular-material.module';
import { createActivity } from '@app/main-panel/activities/state';
import { of } from 'rxjs';

import { ActivityFormComponent } from './activity-form.component';

describe('ActivityFormComponent', () => {
  let component: ActivityFormComponent;
  let fixture: ComponentFixture<ActivityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityFormComponent],
      imports: [AngularMaterialModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormComponent);
    component = fixture.componentInstance;
    component.activity$ = of(createActivity({}));
    component.skills$ = of();
    component.categories$ = of();
    component.isLoading$ = of();
    component.data$ = of();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
