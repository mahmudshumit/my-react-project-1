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
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
