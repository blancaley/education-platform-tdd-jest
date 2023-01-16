import { useFetch } from "../hooks/useFetch";
import { courseService } from "../service";

const Home = () => {
  const courses = useFetch(courseService.fetchCourses);

  return (
    <div className="App">
      <h1>Westcoast Education</h1>
      <p>Courses</p>
      <ul>
        {courses?.map(({ id, ...course }) => {
          return <li key={id}>{course.name}</li>;
        })}
      </ul>
    </div>
  );
};

export { Home };
