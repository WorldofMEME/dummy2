import React from "react";
import Navbar from "../../components/Navbar";
import WomeGlobeSection from "../WomeGlobeSection";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <WomeGlobeSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
