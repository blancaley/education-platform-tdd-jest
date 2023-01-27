import { apiUrl } from "../api-url";

const fetchCourses = async () => {
  const response = await fetch(`${apiUrl}/courses`);
  const data = await response.json();

  if (response.status === 200) {
    return data;
  }

  throw new Error("API returned error");
};

const postCourse = async (course) => {
  const response = await fetch(`${apiUrl}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });
  const data = await response.json();

  if (response.status === 201) {
    return data;
  }

  throw new Error("API returned error");
};
export { fetchCourses, postCourse };
