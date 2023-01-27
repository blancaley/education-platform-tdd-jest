import { useRef } from "react";
import { useContext } from "react";
import { courseService } from "../../service";
import { StoreContext } from "../store";
import { v4 as uuidv4 } from "uuid";

const AddCourse = ({ setModalComponent }) => {
  const { setCourses } = useContext(StoreContext);

  const nameRef = useRef();
  const lengthRef = useRef();
  const descriptionRef = useRef();
  const startDateRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const course = {
      id: uuidv4(),
      number: Math.floor(Math.random() * 10) + 900,
      name: nameRef.current.value,
      length: lengthRef.current.value,
      description: descriptionRef.current.value,
      startDate: startDateRef.current.value,
    };

    const newCourse = await courseService.postCourse(course);
    setCourses((prevStateCourses) => [...prevStateCourses, newCourse]);
    setModalComponent(null);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="courseName">Course Name</label>
        <input type="text" id="courseName" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea type="text" id="description" ref={descriptionRef} />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" ref={startDateRef} />
      </div>
      <div>
        <label htmlFor="length">Course Length</label>
        <input type="text" id="length" ref={lengthRef} />
      </div>
      <button>Add course</button>
    </form>
  );
};

export { AddCourse };
