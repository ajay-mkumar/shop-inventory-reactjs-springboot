import styles from "./ShopScreen.module.css";
import ShopComponent from "../component/ShopComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../redux/shopSlice";
import AddShopScreen from "./AddShopScreen";
import AddButtonComponent from "../component/AddButtonComponent";

function ShopList() {
  // const [isOpen, setIsOpen] = useState(false);
  const { currentModal } = useSelector((state) => state.modalToggle);
  const { shops, loading, error } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);

  return (
    <div className={styles.shopsContainer}>
      <AddButtonComponent modalName="shop" />
      {currentModal === "shop" && <AddShopScreen />}
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading... </p>
      ) : (
        <table className={styles.shopList}>
          <thead className={styles.shopHeader}>
            <tr>
              <th>Name</th>
              <th>Total Products</th>
              <th>functions</th>
            </tr>
          </thead>
          <tbody className={styles.shopBody}>
            {shops.map((shop) => (
              <ShopComponent key={shop.id} shop={shop} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShopList;
