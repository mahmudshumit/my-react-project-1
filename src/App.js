import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import MarketplaceDetail from "./Pages/MarketplaceDetail/MarketplaceDetail";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import LogIn from "./Pages/LogIn/LogIn/LogIn";
import Register from "./Pages/LogIn/Register/Register";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import RequireAuth from "./Pages/LogIn/RequireAuth/RequireAuth";
import AddMarketplace from "./Pages/AddMarketplace/AddMarketplace";
import ManageMarketplace from "./Pages/ManageMarketplace/ManageMarketplace";

function App() {
  return (
    <div>
      <Header></Header>
      

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/marketplace/:marketplaceId" element={<MarketplaceDetail></MarketplaceDetail>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
         <Route path="/addmarketplace" element={
          <RequireAuth>
            <AddMarketplace></AddMarketplace>
          </RequireAuth>
        }></Route>
         <Route path="/manage" element={
          <RequireAuth>
            <ManageMarketplace></ManageMarketplace>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
