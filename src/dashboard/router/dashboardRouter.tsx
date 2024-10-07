import { AppRoute } from "../../interface/router.interface";
import { lazy } from 'react';
import DashBoardLayout from "../layout/DashboardLayout";

const Home = lazy(() => import('../pages/Home'));

export const dashboardRouter: AppRoute[] = [
  {
    path: '/',
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <Home />,      
      },
    ]
  }
];
