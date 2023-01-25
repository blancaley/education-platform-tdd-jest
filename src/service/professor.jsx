import { apiUrl } from "../api-url";

const fetchProfessors = async () => {
  const response = await fetch(`${apiUrl}/professors`);
  const data = await response.json();

  if (response.status === 200) {
    return data;
  }

  throw new Error("API returned error");
};

export { fetchProfessors };
