import { createBrowserRouter, Navigate } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginRoute from "../routes/LoginRoute";
import RegisterRoute from "../routes/RegisterRoute";
import ErrorRoute from "../routes/ErrorRoute";
import MapRoute from "../routes/MapRoute";
import AnalyticsRoute from "../routes/AnalyticsRoute";
import FavoritesRoute from "../routes/FavoritesRoute";
import ProfileRoute from "../routes/ProfileRoute";
import HomeRoute from "../routes/HomeRoute";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundRoute from "../routes/NotFoundRoute";
import LocationDetailsRoute from "../routes/LocationDetailsRoute";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    index: true,
    Component: HomeRoute,
  },
  {
    Component: PublicRoute,
    children: [
      {
        Component: AuthLayout,
        errorElement: <ErrorRoute />,
        children: [
          {
            path: "login",
            Component: LoginRoute,
          },
          {
            path: "register",
            Component: RegisterRoute,
          },
        ],
      },
    ],
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        path: "dashboard",
        Component: DashboardLayout,
        errorElement: <ErrorRoute />,
        children: [
          {
            index: true,
            element : < Navigate to="/dashboard/map" replace/>
          },
          {
            path: "map",
            Component: MapRoute,
          },
          {
            path: "analytics",
            Component: AnalyticsRoute,
          },
          {
            path: "favorites",
            Component: FavoritesRoute,
          },
          {
            path: "profile",
            Component: ProfileRoute,
          },
          {
            path: "location/:id",
            Component: LocationDetailsRoute,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    Component: NotFoundRoute,
  },
]);