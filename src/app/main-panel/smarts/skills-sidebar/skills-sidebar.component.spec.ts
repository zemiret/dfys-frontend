import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { SkillsSidebarTreeComponent } from '@app/main-panel/components';
import { SkillsSidebarComponent } from '@app/main-panel/smarts';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

describe('SkillsSidebarComponent', () => {
  let component: SkillsSidebarComponent;
  let fixture: ComponentFixture<SkillsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsSidebarComponent, SkillsSidebarTreeComponent],
      imports: [
        AngularMaterialModule,
        RouterTestingModule,
        SharedModule,
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
