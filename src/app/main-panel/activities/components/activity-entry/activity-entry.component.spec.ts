import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { createActivtyEntry } from '@app/main-panel/activities/state';

import { ActivityEntryComponent } from './activity-entry.component';

describe('ActivityEntryComponent', () => {
  let component: ActivityEntryComponent;
  let fixture: ComponentFixture<ActivityEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityEntryComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEntryComponent);
    component = fixture.componentInstance;
    component.entry = createActivtyEntry({
      comment: 'comment',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
