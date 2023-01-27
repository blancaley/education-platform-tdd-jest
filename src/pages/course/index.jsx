import { useContext } from "react";
import { CourseList } from "../../components/course-list";
import { StoreContext } from "../../components/store";
import { AddCourse } from "../../components/add-course";
import { Portal } from "../../components/portal";

const Courses = () => {
  const { setModalComponent } = useContext(StoreContext);

  return (
    <main className="flex w-96 max-w-md flex-col items-center gap-8">
      <div className="flex w-full justify-between">
        <h1>Courses</h1>
        <button
          className="button"
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
      </div>

      <CourseList />
    </main>
  );
};

export { Courses };
