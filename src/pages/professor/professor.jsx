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
        <main data-testid="professor-page">
          <h1>{`${professor.firstName}${professor.lastName}`}</h1>
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
