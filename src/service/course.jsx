import { apiUrl } from "../api-url";

const fetchCourses = async () => {
  const response = await fetch(`${apiUrl}/courses`);
  const data = await response.json();

  if (response.status === 200) {
    return data;
  }

  throw new Error("API returned error");
};

export { fetchCourses };
