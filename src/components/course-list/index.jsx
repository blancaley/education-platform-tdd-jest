import { useFetch } from "../../hooks/useFetch";
import { courseService } from "../../service";
import { CourseItem } from "../course-item";

const CourseList = () => {
  const courses = useFetch(courseService.fetchCourses);

  return (
    <ul>
      {courses?.map((course) => {
        const { id } = course;
        return <CourseItem key={id} course={course} />;
      })}
    </ul>
  );
};

export { CourseList };
