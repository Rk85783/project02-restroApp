"use client";

import RestaurantSignup from "../_components/RestaurantSignup";
import RestaurantLogin from "../_components/RestaurantLogin";
import { useState } from "react";
import "./style.css";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantFooter";
const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1 className="">Restaurant Login/Signup Page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignup />}
        <div>
          <button className="button-login" onClick={() => setLogin(!login)}>
            {login
              ? "Do not have account? SignUp"
              : "Already have account? Login"}
          </button>
        </div>
        <RestaurantFooter />
      </div>
    </>
  );
};
export default Restaurant;
