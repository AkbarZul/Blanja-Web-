import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Mybag from "./Mybag";
import Checkout from "./Checkout";
import SortCategory from "./SortCategory";
import AddProduct from "../components/MyProfile/AddProduct";
import Update from "./Update";
import MyProfile from "./MyProfile";
import Filter from "./Filter";
import Search from "./Search";
import GetProduct from "../components/MyProfile/GetProduct";
import PrivateRouter from "../components/Privaterouter";
import RoutePrivate from "../components/RoutePrivate";
import EditProduct from "../components/MyProfile/EditProduct";
import GetOrder from "../components/MyProfile/GetOrder";
import ChangePassword from "../components/MyProfile/ChangePassword";
import ShippingAddress from "../components/MyProfile/ShippingAddress";

// Login Page
// import Login from "../components/";
import Register from "../components/Login/Register";
// import KonfirmasiPassword from "../components/Login/KonfirmasiPassword";
// import ResetPassword from "../components/Login/ResetPassword";
import OtpConfrim from "../components/Login/OtpConfrim";
import KonfirmasiPassword from "../components/Login/KonfirmasiPassword";
import Auth from "./Auth";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <RoutePrivate path="/products/:id" component={Product} />
      {/* <Route path="/mybag" component={Mybag} /> */}
      <PrivateRouter path="/mybag" component={Mybag} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/category/:id_categories" component={SortCategory} />
      <Route path="/search" component={Search} />
      <Route path="/filter" component={Filter} />

      <Route path="/inputProduct" component={AddProduct} />
      <Route path="/edit/:id" component={EditProduct} />
      <Route path="/login" component={Auth} />
      <Route path="/otp" component={OtpConfrim} />
      <Route path="/confrim" component={KonfirmasiPassword} />
      <Route path="/register" component={Register} />
      <Route path="/myproduct" component={GetProduct} />
      <Route path="/myorder" component={GetOrder} />
      <Route path="/change" component={ChangePassword} />
      <Route path="/shippingAddress" component={ShippingAddress} />

      {/* <Route path="/register" component={Auth} />
      <Route path="/konfirmasi" component={Auth} /> */}
      {/* <Route path="/reset" component={ResetPassword} /> */}
      <Route path="/update" component={Update} />
      <Route path="/profile" component={MyProfile} />
    </BrowserRouter>
  );
}
