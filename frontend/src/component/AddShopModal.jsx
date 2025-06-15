import { useState } from "react";
import styles from "./AddShopModal.module.css";
import { useDispatch } from "react-redux";
import { addShop } from "../redux/shopSlice";

function AddShopModal({ onClose }) {
  const [shopName, setShopName] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if(shopName.trim() === "") return;
    dispatch(addShop({shop: shopName}));
    setShopName("");
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>Add Shop</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="shopName">Shop Name: </label>
          <input
            type="text"
            id="shopName"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
          <button className={styles.addBtn}>add shop</button>
        </form>
      </div>
    </div>
  );
}

export default AddShopModal;
