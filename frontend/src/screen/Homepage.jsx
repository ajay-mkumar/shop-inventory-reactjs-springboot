import { useSelector } from "react-redux";
import BarChart from "../component/BarChart";
import ProductCategory from "../component/ProductCategory";
import ShopHomeLayout from "../component/ShopHomeLayout";
import UserDetailsLayout from "../component/UserDetailsLayout";
import styles from "./Homepage.module.css";

function Homepage() {
  const {token} = useSelector(state => state.users);
  console.log(token);
  return (
    <div className={styles.homepage}>
      <div className={styles.shops}>
        <ShopHomeLayout />
        <ProductCategory />
        <BarChart />
      </div>
      <div className={styles.userDetails}>
      <UserDetailsLayout />
      </div>
    </div>
  );
}

export default Homepage;
