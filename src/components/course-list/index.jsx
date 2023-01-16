import { useFetch } from "../../hooks/useFetch";
import { courseService } from "../../service";

const CourseList = () => {
  const courses = useFetch(courseService.fetchCourses);

  return (
    <ul>
      {courses?.map(({ id, ...course }) => {
        return <li key={id}>{course.name}</li>;
      })}
    </ul>
  );
};

export { CourseList };
