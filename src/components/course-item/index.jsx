import { Link } from "react-router-dom";

const CourseItem = ({ course }) => {
  const { id, name, number, length, startDate } = course;
  return (
    <li className="overflow-hidden rounded bg-white p-8 shadow-lg">
      <Link to={`/courses/${id}`} state={course}>
        <h2 className="mb-2 text-xl font-bold">{name}</h2>
        <p className="text-base font-bold text-gray-700">
          <span className="font-normal">Course Number</span> {number}
        </p>
        <p className="text-base font-bold text-gray-700">
          <span className="font-normal ">Duration</span> {length}
        </p>
        <p className="text-base font-bold text-gray-700">
          <span className="font-normal">Start Date</span> {startDate}
        </p>
      </Link>
    </li>
  );
};

export { CourseItem };
