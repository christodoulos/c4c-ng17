import { AuthState } from './auth';
import { RouteDataState } from './route-data';

export interface AppState {
  auth: AuthState;
  routeData: RouteDataState;
}

export * from './auth';
export * from './route-data';
