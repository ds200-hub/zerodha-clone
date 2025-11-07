import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";


function Dashboard() {
  const [cookies, removeCookie] = useCookies([]); // cookies react cookies se aa rha hai.
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "https://zerodha-authentication.vercel.app/login";
      }
      const { data } = await axios.post("https://zerodha-server-fspq.onrender.com", {}, { withCredentials: true });
      const { status, user } = data;
      setUsername(user);
      if (!status) {
        removeCookie("token");
        window.location.href = "https://zerodha-authentication.vercel.app/login";

        //  Prevent duplicate toast using toastId
        //     if (!toast.isActive("welcome-toast")) {
        //         toast(`Hello ${user}`, {
        //             position: "top-right",
        //             toastId: "welcome-toast", // unique id to stop duplicates
        //         });
        //     }
        // } else {
        //     removeCookie("token");
        //     navigate("/login");
      }

    }
    verifyCookie();
  }, [cookies, removeCookie]);

  // const Logout = () => {
  //   removeCookie("token");
  //   window.location.href = "http://localhost:5174/login";

  // }
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;