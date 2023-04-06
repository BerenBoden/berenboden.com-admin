import { useState } from "react";
import { Outlet } from "react-router-dom";
import Searchbar from "./Searchbar";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import Header from "./Header";

export default function index() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          path={path}
        />
        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* Search bar */}
            <Searchbar />
          </div>
          <main className="flex-1 pb-8">
            <Header />
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
