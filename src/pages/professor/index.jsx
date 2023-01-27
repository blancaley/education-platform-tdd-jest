import { ProfessorList } from "../../components/professor-list";
import { AddProfessor } from "../../components/add-professor";
import { useContext } from "react";
import { StoreContext } from "../../components/store";
import { Portal } from "../../components/portal";

const Professors = () => {
  const { setModalComponent } = useContext(StoreContext);

  return (
    <main className="flex w-96 max-w-md flex-col items-center gap-8">
      <div className="flex w-full justify-between">
        <h1>Professors</h1>
        <button
          className="button"
          onClick={() =>
            setModalComponent(
              <Portal
                component={
                  <AddProfessor setModalComponent={setModalComponent} />
                }
              />
            )
          }
        >
          Add professor
        </button>
      </div>
      <ProfessorList />
    </main>
  );
};

export { Professors };
