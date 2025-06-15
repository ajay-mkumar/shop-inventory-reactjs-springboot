import { useEffect, useState } from "react";
import FormComponent from "../component/FormComponent";
import styles from "./FormStyle.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/UserSlice";

function LoginScreen() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated) {
      <Navigate to="/home" replace />;
    }
  }, [isAuthenticated]);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await dispatch(loginUser(formData));

      if (loginUser.fulfilled.match(res)) {
        navigate("/home");
      } else {
        console.error("Login failed:", res.payload || res.error.nessage);
        alert(res.payload || "Login failed! please check your credntials");
      }
    } catch (err) {
      console.error("unexpected error during login", err);
      alert("something went wrong");
    }
  }

  return (
    <FormComponent onSubmit={handleSubmit}>
      <div className={styles.formgroup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonwrapper}>
        <button type="submit">Login</button>
      </div>
    </FormComponent>
  );
}

export default LoginScreen;
