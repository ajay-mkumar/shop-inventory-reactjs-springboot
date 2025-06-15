import { Outlet } from "react-router-dom";

function ShopScreen() {
  return (
    <div>
      <h1>your inventory</h1>

      {<Outlet />}
    </div>
  ) 
}

export default ShopScreen;
