import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/auth/state/user';

@Component({
  selector: 'dfys-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  private registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  private onSubmit() {
    const [username, password, email] = [
      this.registerForm.value.username,
      this.registerForm.value.password,
      this.registerForm.value.email,
    ];

    if (this.registerForm.valid) {
      this.userService.register(username, password, email).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
