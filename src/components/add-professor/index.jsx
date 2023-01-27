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
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" ref={lastNameRef} />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" ref={firstNameRef} />
      </div>
      <div>
        <label htmlFor="securityNumber">Security Number</label>
        <textarea type="text" id="securityNumber" ref={securityNumberRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phoneNumber" ref={phoneNumberRef} />
      </div>
      <div>
        <label htmlFor="skills">Skills</label>
        <input type="text" id="skills" ref={skillsRef} />
      </div>
      <button>Add professor</button>
    </form>
  );
};

export { AddProfessor };
