import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import {
  CogIcon,
  HomeIcon,
  FolderIcon,
  NewspaperIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const routes = {
  adminRoutes: [
    {
      name: "Dashboard",
      element: Dashboard,
      path: "",
      icon: HomeIcon,
    },
    {
      name: "Articles",
      element: Articles,
      path: "articles",
      icon: NewspaperIcon,
    },
    {
      name: "Projects",
      element: Projects,
      path: "projects",
      icon: FolderIcon,
    },
    {
      name: "Settings",
      element: Settings,
      path: "settings",
      icon: CogIcon,
    },
    {
      name: "Analytics",
      element: Analytics,
      path: "analytics",
      icon: ChartBarIcon,
    },
  ],
  publicRoutes: [
    {
      name: "Login",
      element: Login,
      path: "/login",
    },
  ],
};

export default routes;
