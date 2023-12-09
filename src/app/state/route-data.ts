import { createAction, props, on, createReducer } from '@ngrx/store';

export interface RouteDataState {
  title: string;
  info: string;
}

const routeDataInitialState: RouteDataState = {
  title: '',
  info: '',
};

// RouteData Actions

export const setRouteData = createAction(
  '[Route Data] Set Route Data',
  props<{ routeData: RouteDataState }>()
);

// RouteData Reducer

export const routeDataReducer = createReducer(
  routeDataInitialState,
  on(setRouteData, (state, { routeData }) => ({ ...state, routeData }))
);
