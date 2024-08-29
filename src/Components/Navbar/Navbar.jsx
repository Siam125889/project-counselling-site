import { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border border-orange-500 font-bold px-4 py-2 rounded-lg"
              : "text-gray-700"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border border-orange-500 font-bold px-4 py-2 rounded-lg"
              : "text-gray-700"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border border-orange-500 font-bold px-4 py-2 rounded-lg"
              : "text-gray-700"
          }
          to="/x"
        >
          My
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border border-orange-500 font-bold px-4 py-2 rounded-lg"
              : "text-gray-700"
          }
          to="/register"
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed bg-opacity-20 z-10 navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={handleToggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          )}
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-bold text-orange-500"
        >
          Monogolpo
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            className="dropdown dropdown-end dropdown-hover"
            ref={dropdownRef}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={handleToggleDropdown}
            >
              <div className="w-10 rounded-full">
                <img alt="user img" src={user?.photoURL} />
              </div>
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="mt-0 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="bg-orange-500 font-bold text-white mb-2 p-4">
                    {user?.displayName || "No User Name"}
                  </p>
                </li>
                <li>
                  <button onClick={logout} className="btn">
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <Link className="btn bg-orange-500 font-bold text-white" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
