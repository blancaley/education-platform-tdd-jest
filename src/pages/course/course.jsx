import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Course = () => {
  const location = useLocation();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!location) return;
    setCourse(location.state);
  }, [location]);

  return (
    <>
      {course && (
        <main
          data-testid="course-page"
          className="flex w-96 max-w-md flex-col gap-2 rounded bg-white p-8 shadow-lg"
        >
          <h1 className="mb-4">{course.name}</h1>
          <p>{course.description}</p>
          <p>Start date: {course.startDate}</p>
          <p>Duration: {course.length}</p>
        </main>
      )}
    </>
  );
};

export { Course };
