import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { logout } from "../redux/userSlice";

function NavBar() {
  const [showProfileDropDown, setShowProfileDropDown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {username} = useSelector(state => state.users);
  function handleLogout() {
    dispatch(logout);
    navigate("auth");
  }

  return (
    <div className={styles.navbar}>
        <div className={styles.brand}>
          <Link to='/home'>shopify</Link>
        </div>
      <ul className={styles.nav}>
        <li><Link to='shops'>shops</Link></li>
        <li><Link to='products'>products</Link></li>
        <li><Link to='aboutus'>about us</Link></li>
        <div
          className={styles.profileWrapper}
          onMouseEnter={() => setShowProfileDropDown(true)}
          onMouseLeave={() => setShowProfileDropDown(false)}
        >
          <li className={styles.profileLink}>
            <Link to="#">welcome {username}</Link>
          </li>
          {showProfileDropDown && (
            <ul className={styles.dropdown}>
              <li>My Profile</li>
              <li onClick={handleLogout}>logout</li>
            </ul>
          )}
        </div>
 </ul>
    </div>
  );
}

export default NavBar;
