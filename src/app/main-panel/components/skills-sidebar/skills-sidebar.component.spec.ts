import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { of } from 'rxjs';

import { SkillsSidebarComponent } from './skills-sidebar.component';

describe('SkillsSidebarComponent', () => {
  let component: SkillsSidebarComponent;
  let fixture: ComponentFixture<SkillsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsSidebarComponent],
      imports: [AngularMaterialModule, RouterTestingModule],
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
