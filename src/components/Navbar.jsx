import { NavLink } from "react-router-dom";
import Admin from "./admin/Admin";
import AdminMenu from "./admin/AdminMenu";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-10 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-purple-500 text-white px-3 py-1 rounded"
                : "text-black"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-purple-500 text-white px-3 py-1 rounded"
                : "text-black"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-purple-500 text-white px-3 py-1 rounded"
                : "text-black"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/memo"
            className={({ isActive }) =>
              isActive
                ? "bg-purple-500 text-white px-3 py-1 rounded"
                : "text-black"
            }
          >
            Memo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/welcome"
            className={({ isActive }) =>
              isActive
                ? "bg-purple-500 text-white px-3 py-1 rounded"
                : "text-black"
            }
          >
            Welcome
          </NavLink>
        </li>
        <li>
          <Admin />
          <AdminMenu />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
