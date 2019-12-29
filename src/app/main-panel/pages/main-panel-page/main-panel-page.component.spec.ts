import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@app/angular-material.module';
import { AuthModule } from '@app/auth/auth.module';
import { SkillsSidebarTreeComponent } from '@app/main-panel/components';
import { MainPanelPageComponent } from '@app/main-panel/pages';
import { SkillsSidebarComponent } from '@app/main-panel/smarts';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { MainNavigationComponent } from '@shared/components';
import { SharedModule } from '@shared/shared.module';

describe('MainPanelPageComponent', () => {
  let component: MainPanelPageComponent;
  let fixture: ComponentFixture<MainPanelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainPanelPageComponent,
        SkillsSidebarComponent,
        SkillsSidebarTreeComponent,
      ],
      imports: [
        RouterTestingModule,
        AngularMaterialModule,
        HttpClientTestingModule,
        AuthModule,
        SharedModule,
        ReactiveFormsModule,
      ],
      providers: [RouterQuery],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
