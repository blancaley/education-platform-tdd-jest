import { ProfessorList } from "../../components/professor-list";
import { AddProfessor } from "../../components/add-professor";
import { useContext } from "react";
import { StoreContext } from "../../components/store";
import { Portal } from "../../components/portal";

const Professors = () => {
  const { setModalComponent } = useContext(StoreContext);

  return (
    <main>
      <h1>Professors</h1>
      <button
        onClick={() =>
          setModalComponent(
            <Portal
              component={<AddProfessor setModalComponent={setModalComponent} />}
            />
          )
        }
      >
        Add professor
      </button>
      <ProfessorList />
    </main>
  );
};

export { Professors };
