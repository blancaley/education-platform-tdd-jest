import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Professor = () => {
  const location = useLocation();
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    if (!location) return;
    setProfessor(location.state);
  }, [location]);

  return (
    <>
      {professor && (
        <main
          data-testid="professor-page"
          className="flex w-96 max-w-md flex-col gap-2 rounded bg-white p-8 shadow-lg"
        >
          <h1 className="mb-4">{`${professor.firstName} ${professor.lastName}`}</h1>
          <p>E-mail: {professor.email}</p>
          <p>Phone Number: {professor.phoneNumber}</p>
          <p>Social Security Number: {professor.securityNumber}</p>
          <p>Skills: {professor.skills}</p>
        </main>
      )}
    </>
  );
};

export { Professor };
