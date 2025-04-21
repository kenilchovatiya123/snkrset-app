import React from "react";
import Hero from "../components/homepage/Hero";
import BestSeller from "../components/homepage/BestSeller";
import PrivacyPolicy from "../policies/PrivacyPolicy";
import AirJordanPreview from "../components/productView/AirJordanPreview";
import DiorPreview from "../components/productView/DiorPreview";
import SbDunksPreview from "../components/productView/SbDunkPreview";
import MainBrands from "../components/homepage/MainBrands";
import NewsLetter from "../components/homepage/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <AirJordanPreview />
      <DiorPreview />
      <MainBrands />
      <SbDunksPreview />
      <BestSeller />
      <PrivacyPolicy />
      <NewsLetter/>
    </div>
  );
};

export default Home;
