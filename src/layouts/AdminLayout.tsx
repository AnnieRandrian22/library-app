import { NavLink, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";


const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-gray-100 flex flex-col">
        
        {/* LOGO / TITLE */}
        <div className="h-16 flex items-center justify-center border-b border-gray-700">
          <h1 className="text-xl font-bold text-blue-400">Admin Panel</h1>
        </div>

        {/* MENU */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavItem to="/admin/dashboard" label="Dashboard" />
          <NavItem to="/admin/books" label="Books" />
          <NavItem to="/admin/profile" label="Profile" />
        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
          © 2026 DevHub
        </div>
      </aside>

      {/* CONTENT */}
      <main className="ml-64 flex-1 p-6 overflow-y-auto">
        <Suspense fallback= {<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

const NavItem = ({
  to,
  label,
}: {
  to: string;
  label: string;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md transition
       ${
         isActive
           ? "bg-blue-500 text-white"
           : "text-gray-300 hover:bg-gray-800 hover:text-white"
       }`
    }
  >
    {label}
  </NavLink>
);

export default AdminLayout;

