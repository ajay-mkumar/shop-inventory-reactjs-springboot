import { useDispatch, useSelector } from "react-redux";
import FormModal from "../component/FormModal";
import { useEffect, useState } from "react";
import { updateShop } from "../redux/shopSlice";
import { hideModal } from "../redux/modalSlice";

function UpdateShopScreen() {
  const [shopName, setShopName] = useState("");
  const { shop, loading, error } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    setShopName(shop.shop || "");
  }, [shop]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!shopName.trim()) {
      alert("Shop name is required");
      return;
    }

    dispatch(updateShop({ shopId: shop.id, shopData: { shop: shopName } }));
    dispatch(hideModal());
  }

  return (
    <FormModal heading="update shop">
      {loading && <p>loading...</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="shopName">Shop Name: </label>
        <input
          type="text"
          id="shopName"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        />
        <button disabled={shopName === shop.shop}>update shop</button>
      </form>
      {error && <p>{error}</p>}
    </FormModal>
  );
}

export default UpdateShopScreen;
