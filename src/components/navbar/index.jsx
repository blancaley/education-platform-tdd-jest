import Logo from "../../wc-logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-8 flex w-full flex-wrap items-center justify-between bg-pink-700 bg-opacity-40 p-4 px-10 shadow-sm">
      <div className="mr-10 w-28">
        <Link to={"/"}>
          <img src={Logo} alt="west coast" />
        </Link>
      </div>
      <ul className="flex gap-10 text-pink-900">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "activeLink"
                : "transition-all hover:border-b-2 hover:border-pink-900 hover:pb-2"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/courses"}
            className={({ isActive }) =>
              isActive
                ? "activeLink"
                : "transition-all hover:border-b-2 hover:border-pink-900 hover:pb-2"
            }
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/professors"}
            className={({ isActive }) =>
              isActive
                ? "activeLink"
                : "transition-all hover:border-b-2 hover:border-pink-900 hover:pb-2"
            }
          >
            Professors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
