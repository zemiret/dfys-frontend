import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DahsboardPageComponent } from './dahsboard-page.component';

describe('DahsboardPageComponent', () => {
  let component: DahsboardPageComponent;
  let fixture: ComponentFixture<DahsboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DahsboardPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DahsboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
