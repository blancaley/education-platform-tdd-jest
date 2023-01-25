import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { courseService, professorService } from "../service";

const StoreContext = createContext({
  professors: [],
  courses: [],
});

const Store = ({ children }) => {
  const courses = useFetch(courseService.fetchCourses);
  const professors = useFetch(professorService.fetchProfessors);
  return (
    <StoreContext.Provider
      value={{
        professors,
        courses,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { Store, StoreContext };
