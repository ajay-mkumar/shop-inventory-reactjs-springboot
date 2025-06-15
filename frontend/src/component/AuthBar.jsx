import { NavLink } from "react-router-dom"
import styles from "./AuthBar.module.css";

function AuthBar() {
    return (
        <div className={styles.authbar}>
            <h1>Demo</h1>
            <ul className={styles.authNav}>
                <li>
                    <NavLink to={'/auth/login'}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={'/auth/signup'}>Sign up</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AuthBar
