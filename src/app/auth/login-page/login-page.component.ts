import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/auth/state/user';

@Component({
  selector: 'dfys-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  private loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  private onSubmit() {
    if (this.loginForm.valid) {
      this.userService
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(() => {
          this.router.navigateByUrl('/');
        });
    }
  }
}
