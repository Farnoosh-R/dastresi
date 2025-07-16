import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Home from "./pages/Home/Home";
import React, { useEffect, useState } from "react";

export let MyContext = React.createContext();

function App() {

const [dailyDiscountRight, setDailyDiscountRight] = useState([]);
const [dailyDiscountLeft, setDailyDiscountLeft] = useState([]);

const fetchDailyDiscount = async () => {
  let res = await fetch("../db.json")
  let data = await res.json()
  setDailyDiscountRight(data.dailyDiscount.right);
  setDailyDiscountLeft(data.dailyDiscount.left);
}
useEffect(() => {
  fetchDailyDiscount();
},[])

  return (
    <BrowserRouter>
    <MyContext value={{dailyDiscountRight: dailyDiscountRight, dailyDiscountLeft: dailyDiscountLeft}}>
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </MyContext>
    </BrowserRouter>
  );
}

export default App;
