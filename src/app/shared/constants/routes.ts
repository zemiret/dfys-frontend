export enum RouteNames {
  AUTH = 'auth',
  LOGIN = 'login',
  REGISTER = 'register',

  MAIN_PANEL = 'main-panel',
  SKILLS = 'skills',
  ACTIVITIES = 'activities',

  SETTINGS = 'settings',
}

export const Routes = {
  LOGIN: `/${RouteNames.AUTH}/${RouteNames.LOGIN}`,
  REGISTER: `/${RouteNames.AUTH}/${RouteNames.REGISTER}`,

  MAIN_PANEL: `/${RouteNames.MAIN_PANEL}`,
  SKILLS: `/${RouteNames.MAIN_PANEL}/${RouteNames.SKILLS}`,
  ACTIVITIES: `/${RouteNames.MAIN_PANEL}/${RouteNames.ACTIVITIES}`,

  SETTINGS: `/${RouteNames.SETTINGS}`,
};
