import { useDispatch } from "react-redux";
import styles from "./FormModal.module.css";
import { hideModal } from "../redux/modalSlice";

function FormModal({ heading, children }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={() => dispatch(hideModal())}
        >
          ✖
        </button>
        <h2>Add {heading}</h2>
        {children}
      </div>
    </div>
  );
}

export default FormModal;
