import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivityEntryComponent } from '@app/main-panel/activities/components';
import { createActivity } from '@app/main-panel/activities/state';
import { of } from 'rxjs';

import { ActivityEntryListComponent } from './activity-entry-list.component';

describe('ActivityEntryListComponent', () => {
  let component: ActivityEntryListComponent;
  let fixture: ComponentFixture<ActivityEntryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [ActivityEntryListComponent, ActivityEntryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEntryListComponent);
    component = fixture.componentInstance;
    component.activity$ = of(createActivity({}));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
