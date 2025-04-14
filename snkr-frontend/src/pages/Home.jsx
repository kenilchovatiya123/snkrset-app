import React from "react";
import Hero from "../components/homepage/Hero";
import BestSeller from "../components/homepage/BestSeller";
import PrivacyPolicy from "../policies/PrivacyPolicy";
import NewLetterBox from "../components/homepage/NewLetterBox";
import AirJordanPreview from "../components/productView/AirJordanPreview";
import DiorPreview from "../components/productView/DiorPreview";
import SbDunksPreview from "../components/productView/SbDunkPreview";

const Home = () => {
  return (
    <div>
      <Hero />
      <AirJordanPreview />
      <DiorPreview />
      <SbDunksPreview />
      <BestSeller />
      <PrivacyPolicy />
      <NewLetterBox />
    </div>
  );
};

export default Home;
