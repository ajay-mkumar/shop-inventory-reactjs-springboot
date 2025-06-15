import styles from "./ShopScreen.module.css";
import ShopComponent from "../component/ShopComponent";
import { useEffect, useState } from "react";
import AddShopModal from "../component/AddShopModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../redux/shopSlice";

// const shops = [
//   {
//     name: "aj shop",
//     totalProducts: 25,
//   },
//   {
//     name: "sha shop",
//     totalProducts: 27,
//   },
//   {
//     name: "as shop",
//     totalProducts: 100,
//   },
// ];
function ShopScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const { shops, loading, error } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);
  
  
  return (
    <div className={styles.shopsContainer}>
      <button className={styles.addBtn} onClick={() => setIsOpen(true)}>
        Add Shop
      </button>
      {isOpen && <AddShopModal onClose={() => setIsOpen(false)} />}
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
            {shops.map((shop, index) => (
              <ShopComponent
                key={index}
                shopName={shop.shop}
                totalProducts={shop.totalProducts}
                index={index}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShopScreen;
