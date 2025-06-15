import { useDispatch } from "react-redux";
import { showModal } from "../redux/modalSlice";

function AddButtonComponent({modalName}) {
  const dispatch = useDispatch();
  const formatLabel = (label) => label.charAt(0).toUpperCase() + label.slice(1);

  return <button onClick={() => dispatch(showModal(modalName))}>Add {formatLabel(modalName)}</button>;
}

export default AddButtonComponent;
