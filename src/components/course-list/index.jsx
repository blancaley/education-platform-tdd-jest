import { CourseItem } from "../course-item";
import { useContext } from "react";
import { StoreContext } from "../store";

const CourseList = () => {
  const { courses } = useContext(StoreContext);

  return (
    <ul className="flex flex-col gap-4">
      {courses?.map((course) => {
        const { id } = course;
        return <CourseItem key={id} course={course} />;
      })}
    </ul>
  );
};

export { CourseList };
