import { useContext } from "react";
import { CourseList } from "../../components/course-list";
import { StoreContext } from "../../components/store";
import { AddCourse } from "../../components/add-course";
import { Portal } from "../../components/portal";

const Courses = () => {
  const { setModalComponent } = useContext(StoreContext);

  return (
    <main>
      <h1>Courses</h1>
      <button
        onClick={() =>
          setModalComponent(
            <Portal
              component={<AddCourse setModalComponent={setModalComponent} />}
            />
          )
        }
      >
        Add course
      </button>
      <CourseList />
    </main>
  );
};

export { Courses };
