import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "../App";
import Home from "../pages/Home";
import Information from "../components/Information";
import Token from "../components/Token";
import Counter from "../components/Counter";
import Countdown from "../components/Countdown";
import EditDisplay from "../components/EditDisplay";
import AuthPage from "../components/AuthPage";
import BrandDashboard from "../components/BrandDashboard";
import OwnerDashboard from "../components/OwnerDashboard";
import ShopDetail from "../components/ShopDetail";
import BrandDashboard2 from "../components/BrandDashboard2";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<AuthPage />} />
          <Route path="/ownerdashboard" element={<OwnerDashboard />} />
          <Route path="BrandDashboard" element={<BrandDashboard />} />
          <Route path="/shop/:id" element={<ShopDetail />} />
          <Route path="/:title/branddashboard2/:id" element={<BrandDashboard2 />} />
          <Route path="/:id/counter" element={<Counter />} />
          <Route path="/:id/editdisplay" element={<EditDisplay />} />
          <Route path="/:id/token" element={<Token />} />
          <Route path="/:id/countdown" element={<Countdown />} />

          <Route path="/:id/information" element={<Information />} />
          <Route path="/:title/:id/:outlet">
            <Route index element={<Home />} />
            {/* <Route path="BrandDashboard" element={<BrandDashboard />} /> */}
            <Route path="information" element={<Information />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
