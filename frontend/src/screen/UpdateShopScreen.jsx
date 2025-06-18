import { useSelector } from "react-redux";
import FormModal from "../component/FormModal";
import { useEffect, useState } from "react";

function UpdateShopScreen() {
  const [shopName, setShopName] = useState("");
  const { shop, loading, error } = useSelector((state) => state.shop);

  useEffect(() => {
    setShopName(shop.shop);
  }, [shop]);

  return (
    <FormModal heading="update shop">
      {loading && <p>loading...</p>}
      <form>
        <label htmlFor="shopName">Shop Name: </label>
        <input type="text" id="shopName" value={shopName} onChange={(e) => setShopName(e.target.value)}/>
        <button>update shop</button>
      </form>
      {error && <p>{error}</p>}
    </FormModal>
  );
}

export default UpdateShopScreen;
