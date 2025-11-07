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
  const navigate = useNavigate();

  useEffect(() => {

    const verifyCookie = async () => {
      console.log(cookies.token);
      if (!cookies.token) {
        navigate("/login");
      }

      const { data } = await axios.post("https://zerodha-server-fspq.onrender.com", {}, { withCredentials: true });
      console.log(data);
      const { status, user } = data;
      setUsername(user);
      if (!status) {
        removeCookie("token");
        navigate("/login");

      }
    }
    verifyCookie();
  }, [cookies, removeCookie]);

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



