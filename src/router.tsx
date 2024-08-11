import { Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import NotFound from "./pages/not-found";
import DashboardLayout from "./components/layout/dashboard-layout";
import SignInPage from "./pages/auth/sign-in";
import HomePage from "./pages/home-page";
// import OverviewPage from "./pages/home-page/overview";

const AnalyticsPage = lazy(() => import("./pages/analytics-page"));
const ReleasesPage = lazy(() => import("./pages/releases-page"));
const AccountPage = lazy(() => import("./pages/account-page"));
const SecurityPage = lazy(() => import("./pages/security-page"));
const SettingsPage = lazy(() => import("./pages/settings-page"));

// Main routes with DashboardLayout
const dashboardRoutes = [
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      {
        element: <HomePage />,
        index: true,
      },

      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "releases",
        element: <ReleasesPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "security",
        element: <SecurityPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
];

// Public routes
const publicRoutes = [
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];

// UseRoutes hook to set up the routes
export default function AppRouter() {
  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
