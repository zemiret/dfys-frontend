import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { SkillAddControlComponent } from '@app/main-panel/components/skill-add-control/skill-add-control.component';
import { of } from 'rxjs';

import { SkillsSidebarComponent } from './skills-sidebar.component';

describe('SkillsSidebarComponent', () => {
  let component: SkillsSidebarComponent;
  let fixture: ComponentFixture<SkillsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsSidebarComponent, SkillAddControlComponent],
      imports: [
        AngularMaterialModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSidebarComponent);
    component = fixture.componentInstance;
    component.skills$ = of([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
