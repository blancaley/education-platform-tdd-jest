import { ProfessorItem } from "../professor-item";
import { useContext } from "react";
import { StoreContext } from "../store";

const ProfessorList = () => {
  const { professors } = useContext(StoreContext);

  return (
    <ul>
      {professors?.map((professor) => {
        const { id } = professor;
        return <ProfessorItem key={id} professor={professor} />;
      })}
    </ul>
  );
};

export { ProfessorList };
