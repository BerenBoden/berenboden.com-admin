import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Admin from "./layouts/admin/Admin";
import Public from "./layouts/public";
import routes from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Admin />}>
        {routes.adminRoutes.map((route) => (
          <Route
            key={route.name}
            element={<route.element />}
            path={route.path}
          />
        ))}
      </Route>
      <Route element={<Public />}>
        {routes.publicRoutes.map((route) => (
          <Route
            key={route.name}
            element={<route.element />}
            path={route.path}
          />
        ))}
      </Route>
    </>
  )
);

export default function Example() {
  return <RouterProvider router={router} />;
}
