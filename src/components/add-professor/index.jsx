import { useRef } from "react";
import { useContext } from "react";
import { professorService } from "../../service";
import { StoreContext } from "../store";
import { v4 as uuidv4 } from "uuid";

const AddProfessor = ({ setModalComponent }) => {
  const { setProfessors } = useContext(StoreContext);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const securityNumberRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const skillsRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const professor = {
      id: uuidv4(),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      securityNumber: securityNumberRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      skills: skillsRef.current.value,
    };

    const newProfessor = await professorService.postProfessor(professor);
    setProfessors((prevStateProfessors) => [
      ...prevStateProfessors,
      newProfessor,
    ]);
    setModalComponent(null);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-8">
      <div>
        <label
          htmlFor="firstName"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={firstNameRef}
        />
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={lastNameRef}
        />
      </div>

      <div>
        <label
          htmlFor="securityNumber"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Security Number
        </label>
        <input
          type="text"
          id="securityNumber"
          className="focus:shadow-outline w-full
          appearance-none rounded border py-2 px-3 leading-tight text-gray-700
          shadow focus:outline-none"
          ref={securityNumberRef}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={emailRef}
        />
      </div>
      <div>
        <label
          htmlFor="phoneNumber"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={phoneNumberRef}
        />
      </div>
      <div>
        <label
          htmlFor="skills"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Skills
        </label>
        <input
          type="text"
          id="skills"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={skillsRef}
        />
      </div>
      <button className="button">Add professor</button>
    </form>
  );
};

export { AddProfessor };
