import { useContext } from "react";
import { StoreContext } from "../store";

const Portal = ({ component }) => {
  const { setModalComponent } = useContext(StoreContext);
  return (
    <div>
      <button onClick={() => setModalComponent(null)}>Close X</button>
      {component}
    </div>
  );
};

export { Portal };
