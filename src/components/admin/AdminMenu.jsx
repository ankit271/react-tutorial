import { NavLink } from "react-router-dom";
import { useState } from "react";

function AdminMenu() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="relative inline-block cursor-pointer">
      <a
        onClick={() => setSettingsOpen(!settingsOpen)}        
      >
        Admin
      </a>

      {settingsOpen && (
        <div className="absolute top-full left-0 shadow-lg rounded mt-1 bg-white">
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `block px-4 py-2 hover:bg-gray-100 ${
                isActive ? "bg-gray-200 font-semibold" : ""
              }`
            }
            onClick={() => setSettingsOpen(false)}
          >
            Settings
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `block px-4 py-2 hover:bg-gray-100 ${
                isActive ? "bg-gray-200 font-semibold" : ""
              }`
            }
            onClick={() => setSettingsOpen(false)}
          >
            Users
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default AdminMenu;