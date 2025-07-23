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
const [availableNow, setAvailableNow] = useState([]);
const [bestSellers, setBestSellers] = useState([]);

const fetchDailyDiscount = async () => {
  try {
      let res = await fetch("../db.json")
  let data = await res.json()
  setDailyDiscountRight(data.dailyDiscount.right);
  setDailyDiscountLeft(data.dailyDiscount.left);
  } catch (error) {
    console.log(error.message)
  }
}
const fetchAvailableNow = async () => {
  try {
      let res = await fetch("../db.json");
  let data = await res.json();
  setAvailableNow(data.availableNow);
  } catch (error) {
    console.log(error.message);
    
  }
}
const fetchBestSellers = async () => {
  try {
    let res = await fetch("../db.json");
    let data = await res.json()
    setBestSellers(data.bestSellers)
  } catch (error) {
    console.log(error.message)
  }
}
useEffect(() => {
  fetchDailyDiscount();
  fetchAvailableNow();
  fetchBestSellers();
},[])

  return (
    <BrowserRouter>
    <MyContext value={{dailyDiscountRight: dailyDiscountRight, dailyDiscountLeft: dailyDiscountLeft, availableNow: availableNow, bestSellers: bestSellers}}>
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </MyContext>
    </BrowserRouter>
  );
}

export default App;
