import { Link } from "react-router-dom";

const ProfessorItem = ({ professor }) => {
  const { id, firstName, lastName, securityNumber, email, phoneNumber } =
    professor;

  return (
    <li className="overflow-hidden rounded bg-white p-8 shadow-lg">
      <Link to={`/professors/${id}`} state={professor}>
        <h2 className="mb-2 text-xl font-bold">{`${firstName} ${lastName}`}</h2>
        <p className="text-base font-bold text-gray-700">
          <span className="font-normal">Security Number</span> {securityNumber}
        </p>
        <p className="text-base font-bold text-gray-700">
          <span className="font-normal">Email</span> {email}
        </p>
        <p className="text-base font-bold text-gray-700">
          <span className="font-normal">Phone Number</span> {phoneNumber}
        </p>
      </Link>
    </li>
  );
};

export { ProfessorItem };
