import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { AppRoute } from '../interface/router.interface';
import { dashboardRouter } from '../dashboard/router/dashboardRouter';

const routes: AppRoute[] = [
  ...dashboardRouter,
];

export const appRouter = createBrowserRouter(routes as RouteObject[]);
