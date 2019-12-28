import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/auth/state/user';
import { Paths } from '@shared/constants/routes';

@Component({
  selector: 'dfys-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  private logout() {
    this.userService.logout();
    this.router.navigateByUrl(Paths.LOGIN);
  }
}
