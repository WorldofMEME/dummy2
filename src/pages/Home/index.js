import React from "react";
import Navbar from "../../components/Navbar";
import WomeGlobeSection from "../WomeGlobeSection";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col ">
      <Navbar />
      <WomeGlobeSection />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;