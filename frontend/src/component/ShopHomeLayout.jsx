import { Link } from "react-router-dom";
import styles from "./ShopHomeLayout.module.css";
import ShopSvg from "./ShopSvg";

function ShopHomeLayout() {
  return (
    <div className={styles.shopLayout}>
      <ul>
        <li>
            <ShopSvg />
          <Link to={"/home"}> Shop 1</Link>
        </li>
        <li>
        <ShopSvg />
          <Link to={"/home"}> Shop 2</Link>
        </li>
        <li>
        <ShopSvg />
          <Link to={"/home"}>Shop 3</Link>
        </li>
        <li>
        <ShopSvg />
          <Link to={"/home"}> Shop 4</Link>
        </li>
      </ul>
    </div>
  );
}

export default ShopHomeLayout;
