import React from "react";
import Navbar from "../../components/Navbar";
import WomeGlobeSection from "../WomeGlobeSection";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-start ">
      <Navbar />
      <WomeGlobeSection />
    </div>
  );
}

export default Home;