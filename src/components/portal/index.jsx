import { useContext } from "react";
import { StoreContext } from "../store";

const Portal = ({ component }) => {
  const { setModalComponent } = useContext(StoreContext);
  return (
    <div className="fixed z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex w-96 flex-col rounded-md bg-white p-12 shadow-md">
        <button
          className="self-end pb-3 text-sm leading-none text-gray-600"
          onClick={() => setModalComponent(null)}
        >
          Close X
        </button>
        {component}
      </div>
    </div>
  );
};

export { Portal };
