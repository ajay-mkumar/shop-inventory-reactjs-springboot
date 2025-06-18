import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShop } from "../redux/shopSlice";
import FormModal from "../component/FormModal";

function AddShopScreen() {
  const [shopName, setShopName] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (shopName.trim() === "") return;
    dispatch(addShop({ shop: shopName }));
    setShopName("");
  }

  return (
    <FormModal heading="add shop">
      <form onSubmit={handleSubmit}>
        <label htmlFor="shopName">Shop Name: </label>
        <input
          type="text"
          id="shopName"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        />
        <button>add shop</button>
      </form>
    </FormModal>
  );
}

export default AddShopScreen;
