import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar />
      <Announcement />
      <h1> Successful!</h1>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Success;
