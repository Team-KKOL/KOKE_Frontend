// import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css'
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
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";
import MissingPage from "./pages/MissingPage";

const GlobalStyle = createGlobalStyle`
  * {margin: 0; padding: 0;}
  li {list-style: none;}
  a { text-decoration: none; color: #333;}
  img { display: block;}
  body{
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />

        <Routes>
          <Route path="*" element={<MissingPage /> } />
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AllCoffee" element={<AllCoffee />} />
            {/* <Route path="CoffeeDetails/:id" element={<CoffeeDetails />} /> */}
          <Route path="CoffeeDetails" element={<CoffeeDetails />} />
          <Route path="/AllRoastery" element={<AllRoastery />} />
          <Route path="AllRoastery/:id" element={<RoasteryDetails />} />

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
      </ThemeProvider>
    </div>
  );
}

export default App;
