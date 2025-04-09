import React from "react";
import Hero from "../components/homepage/Hero";
import LatestCollection from "../components/homepage/LatestCollections";
import BestSeller from "../components/homepage/BestSeller";
import PrivacyPolicy from "../policies/PrivacyPolicy";
import NewLetterBox from "../components/homepage/NewLetterBox";

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection />
      <BestSeller />
      <PrivacyPolicy />
      <NewLetterBox />
    </div>
  );
};

export default Home;
