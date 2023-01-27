import { useState, useEffect, createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { courseService, professorService } from "../service";
import { createPortal } from "react-dom";

const StoreContext = createContext({
  professors: [],
  courses: [],
});

const Store = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [modalComponent, setModalComponent] = useState(null);

  const coursesData = useFetch(courseService.fetchCourses);
  const professorsData = useFetch(professorService.fetchProfessors);

  useEffect(() => {
    setCourses(coursesData);
    setProfessors(professorsData);
  }, [coursesData, professorsData]);

  return (
    <StoreContext.Provider
      value={{
        professors,
        courses,
        setCourses,
        setProfessors,
        setModalComponent,
      }}
    >
      {children}
      {modalComponent &&
        createPortal(modalComponent, document.getElementById("modal-root"))}
    </StoreContext.Provider>
  );
};

export { Store, StoreContext };
