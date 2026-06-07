import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginRoute from "../routes/LoginRoute";
import RegisterRoute from "../routes/RegisterRoute";
import ErrorRoute from "../routes/ErrorRoute";
import MapRoute from "../routes/MapRoute";
import AnalyticsRoute from "../routes/AnalyticsRoute";
import FavoritesRoute from "../routes/FavoritesRoute";
import ProfileRoute from "../routes/ProfileRoute";
import LocationDetailsRoute from "../routes/LocationDetailsRoute";
import { service as locationService} from "../service/locations";
import DashboardLayout from "../layouts/DashboardLayout";

export let router = createBrowserRouter([
    {
      path: "/",
      Component: AuthLayout,
      children: [
        {
            path: "login",
            Component: LoginRoute,
            errorElement: <ErrorRoute />
   
        },
        {
            path: "register",
            Component: RegisterRoute,
            errorElement: <ErrorRoute/>
        },
        {
          path: "dashboard",
          Component: DashboardLayout,
          HydrateFallback: () => <p>Loading...</p>,
          children: [
            {
              path: "map",
              Component: MapRoute,
              loader: () => locationService.get(),
              errorElement: <ErrorRoute />
            },
            {
              path: "analytics",
              Component: AnalyticsRoute,
              errorElement: <ErrorRoute />
            },
            {
               path: "favorites",
               Component: FavoritesRoute,
               errorElement: <ErrorRoute />
            },
            {
                path: "profile",
                Component: ProfileRoute,
                errorElement: <ErrorRoute />
            },

            {
                path: "location/:id",
                loader: ({ params }) => locationService.get(params.id),
                Component: LocationDetailsRoute,
                HydrateFallback: () => <p>Loading...</p>,
                errorElement: <ErrorRoute />
              }
          ]}
        
     ]
    }
    ]
);