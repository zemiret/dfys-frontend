import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';

import { IsLoggedInGuard } from './is-logged-in.guard';

describe('IsLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [IsLoggedInGuard, CookieService],
    });
  });

  it('should ...', inject([IsLoggedInGuard], (guard: IsLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
