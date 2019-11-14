import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '@app/angular-material.module';

import { SkillsSidebarComponent } from './skills-sidebar.component';

describe('SkillsSidebarComponent', () => {
  let component: SkillsSidebarComponent;
  let fixture: ComponentFixture<SkillsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsSidebarComponent],
      imports: [AngularMaterialModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
