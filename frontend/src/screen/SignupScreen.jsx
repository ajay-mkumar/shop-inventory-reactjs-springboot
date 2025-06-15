import FormComponent from "../component/FormComponent";
import styles from "./FormStyle.module.css";

function SignupScreen() {
  return (
    <FormComponent>
      <div className={styles.formgroup}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="username">email</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className={styles.buttonwrapper}>
        <button>Login</button>
      </div>
    </FormComponent>
  );
}

export default SignupScreen;
