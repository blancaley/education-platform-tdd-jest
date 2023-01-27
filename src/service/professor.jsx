import { apiUrl } from "../api-url";

const fetchProfessors = async () => {
  const response = await fetch(`${apiUrl}/professors`);
  const data = await response.json();

  if (response.status === 200) {
    return data;
  }

  throw new Error("API returned error");
};

const postProfessor = async (professor) => {
  const response = await fetch(`${apiUrl}/professors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(professor),
  });
  const data = await response.json();

  if (response.status === 201) {
    return data;
  }

  throw new Error("API returned error");
};

export { fetchProfessors, postProfessor };
