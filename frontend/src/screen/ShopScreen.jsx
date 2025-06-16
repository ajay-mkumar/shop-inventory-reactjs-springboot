import { Outlet } from "react-router-dom";
import styles from "./ShopScreen.module.css";
import { useSelector } from "react-redux";

function ShopScreen() {
  const { username } = useSelector((state) => state.users);
  return (
    <div>
      <h1 className={styles.inventoryTitle}>{username}'s inventory</h1>

      {<Outlet />}
    </div>
  );
}

export default ShopScreen;
