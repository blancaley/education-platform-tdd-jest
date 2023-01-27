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
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-8">
      <div>
        <label
          htmlFor="courseName"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Course Name
        </label>
        <input
          type="text"
          id="courseName"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={nameRef}
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Description
        </label>
        <textarea
          type="text"
          id="description"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={descriptionRef}
        />
      </div>
      <div>
        <label
          htmlFor="startDate"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={startDateRef}
        />
      </div>
      <div>
        <label
          htmlFor="length"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Course Length
        </label>
        <input
          type="text"
          id="length"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={lengthRef}
        />
      </div>
      <button className="button justify-self-center">Add course</button>
    </form>
  );
};

export { AddCourse };
