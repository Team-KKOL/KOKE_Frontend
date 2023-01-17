import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AllCoffee from "./pages/AllCoffee";
import AllRoastery from "./pages/AllRoastery";
import MyPage from "./pages/MyPage";

import Subscribe from "./subPages/Subscribe";
import MyCart from "./subPages/MyCart";
import ProductOfInterest from "./subPages/ProductOfInterest";
import RecentlyViewed from "./subPages/RecentlyViewed";
import RoasteryOfInterest from "./subPages/RoasteryOfInterest";
import MyReview from "./subPages/MyReview";
import MyInformation from "./subPages/MyInformation";
import CoffeeDetails from "./pages/CoffeeDetails";
import RoasteryDetails from "./pages/RoasteryDetails";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<div>없는 페이지</div>} />
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AllCoffee" element={<AllCoffee />}>
          <Route path="CoffeeDetails/:id" element={<CoffeeDetails />} />
        </Route>
        <Route path="/AllRoastery" element={<AllRoastery />}>
          <Route path="AllRoastery/:id" element={<RoasteryDetails />} />
        </Route>

        <Route path="/MyPage" element={<MyPage />}>
          <Route path="SubscriptionSchedule" element={<Subscribe />} />   
          <Route path="MyCart" element={<MyCart />} /> 
          <Route path="ProductOfInterest" element={<ProductOfInterest />} /> 
          <Route path="RecentlyViewedProducts" element={<RecentlyViewed />} /> 
          <Route path="roasteryOfInterest" element={<RoasteryOfInterest />} /> 
          <Route path="MyReview" element={<MyReview />} /> 
          <Route path="MyInformation" element={<MyInformation />} /> 
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
