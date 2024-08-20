import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();
  console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border border-orange-500 font-bold px-4 py-2 rounded-lg"
              : "text-gray-500"
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
              : "text-gray-500"
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
              : "text-gray-500"
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
              : "text-gray-500"
          }
          to="/register"
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-orange-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-bold text-orange-500"
        >
          মন ও গল্প
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end dropdown-hover ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user img" src={user?.photoURL} />
              </div>
            </div>
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
          </div>
        ) : (
          <Link className="btn bg-orange-500 font-bold text-white" to="/login">
            Login
          </Link>
        )}
      </div>
      <div className="dropdown dropdown-end ">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost bg-orange-500 text-white"
        >
          My Profile
        </div>
        <ul
          tabIndex={0}
          className="mt-0 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/addvolunteerpost">
              <p className="bg-orange-500 font-bold text-white mb-2 p-4 rounded-xl">
                Add Volunteer Post
              </p>
            </Link>
          </li>

          <li>
            <Link to="/managemypost">
              <p className="bg-orange-500 font-bold text-white mb-2 p-4 rounded-xl">
                Manage My Post
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
