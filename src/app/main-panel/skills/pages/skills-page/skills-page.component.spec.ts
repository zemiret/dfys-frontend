import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { SkillCardComponent } from '@app/main-panel/skills/components';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { ActivityCardComponent } from '@shared/components';

import { SkillsPageComponent } from './skills-page.component';

describe('SkillsPageComponent', () => {
  let component: SkillsPageComponent;
  let fixture: ComponentFixture<SkillsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [
        SkillsPageComponent,
        SkillCardComponent,
        ActivityCardComponent,
      ],
      providers: [RouterQuery],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
