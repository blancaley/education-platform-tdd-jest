import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/courses"}>Courses</NavLink>
        </li>
        <li>
          <NavLink to={"/professors"}>Professors</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
