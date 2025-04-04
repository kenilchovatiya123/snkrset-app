import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import PrivacyPolicy from "../policies/PrivacyPolicy";
import NewLetterBox from "../components/NewLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <PrivacyPolicy />
      <NewLetterBox />
    </div>
  );
};

export default Home;
