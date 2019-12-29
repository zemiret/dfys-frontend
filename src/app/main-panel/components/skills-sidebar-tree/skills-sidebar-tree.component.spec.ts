import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { SkillsSidebarTreeComponent } from '@app/main-panel/components';
import { of } from 'rxjs';

describe('SkillsSidebarTreeComponent', () => {
  let component: SkillsSidebarTreeComponent;
  let fixture: ComponentFixture<SkillsSidebarTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsSidebarTreeComponent],
      imports: [
        AngularMaterialModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSidebarTreeComponent);
    component = fixture.componentInstance;
    component.skills$ = of([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
