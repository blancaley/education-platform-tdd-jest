import { Link } from "react-router-dom";

const ProfessorItem = ({ professor }) => {
  const { firstName, lastName, securityNumber, path, email, phoneNumber } =
    professor;

  return (
    <li>
      <Link to={`/professors/${firstName}${lastName}`} state={professor}>
        <h2>{`${firstName} ${lastName}`}</h2>
        <p>{securityNumber}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </Link>
    </li>
  );
};

export { ProfessorItem };
