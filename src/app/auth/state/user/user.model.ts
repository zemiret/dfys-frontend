export interface User {
  username: string;
  email: string;
}

export interface UserState {
  user: User;
  csrfToken: string;
  redirectUrl: string;
}
