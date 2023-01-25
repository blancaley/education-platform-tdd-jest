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
        <main data-testid="course-page">
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          <p>Start date: {course.startDate}</p>
          <p>Length: {course.length}</p>
        </main>
      )}
    </>
  );
};

export { Course };
