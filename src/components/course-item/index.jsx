import { Link } from "react-router-dom";

const CourseItem = ({ course }) => {
  const { name, path } = course;
  return (
    <li>
      <Link to={`${path}`}>{name}</Link>
    </li>
  );
};

export { CourseItem };
