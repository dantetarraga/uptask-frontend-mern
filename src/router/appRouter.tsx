import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy, LazyExoticComponent } from 'react';

const Home = lazy(() => import('../dashboard/pages/Home'));

type JSXElement =
  | LazyExoticComponent<() => JSX.Element>
  | (() => JSX.Element)
  | JSX.Element;

interface AppRoute {
  path: string;
  element: JSXElement;
  children?: AppRoute[];
  index?: boolean;
  to?: string;
}

const routes: AppRoute[] = [
  {
    path: '/',
    index: true,
    element: <Home />,
  },
];

export const appRouter = createBrowserRouter(routes as RouteObject[]);
