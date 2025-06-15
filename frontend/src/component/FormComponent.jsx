import AuthBar from "./AuthBar";
import styles from "./FormComponent.module.css";

function FormComponent({ onSubmit, children }) {
 

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <AuthBar />
        {children}
      </form>
    </div>
  );
}

export default FormComponent;
