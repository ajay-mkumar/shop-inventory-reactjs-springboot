import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import AuthScreen from "./screen/AuthScreen";
import ProtectedRoute from "./component/ProtectedRoute";
import Homepage from "./screen/Homepage";
import NavBar from "./component/NavBar";
import NavLayout from "./component/NavLayout";
import ShopScreen from "./screen/ShopScreen";
import ProductScreen from "./screen/ProductScreen";
import ShopList from "./screen/ShopList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthScreen />}>
          <Route index element={<Navigate replace to={"login"} />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="signup" element={<SignupScreen />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<NavLayout />}>
            <Route path="home" element={<Homepage />} />
            <Route path="shops" element={<ShopScreen />}>
              <Route index element={<Navigate replace to="shoplist" />} />
              <Route path="shoplist" element={<ShopList />} />
              <Route path="products/:id" element={<ProductScreen />} />
            </Route>
            <Route path="products" element={<ProductScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
