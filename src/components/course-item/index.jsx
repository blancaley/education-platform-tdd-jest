import { Link } from "react-router-dom";

const CourseItem = ({ course }) => {
  const { name, number, path, length, startDate } = course;
  return (
    <li>
      <Link to={`/courses/${path}`} state={course}>
        <h2>{name}</h2>
        <p>{number}</p>
        <p>{length}</p>
        <p>{startDate}</p>
      </Link>
    </li>
  );
};

export { CourseItem };
