import React from "react";
import Navigation from "../../Components/Navigation";
import Banner from "../../Components/Banner";
import WorkPlanCards from "../../Components/WorkPlanCards";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Stylishly from "../../Components/Stylishly";
import Customers from "../../Components/Customers";
import AdsBannerSlider from "../../Components/AdsBannerSlider";

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Helmet>
        <title>Interno</title>
      </Helmet>
      <Navigation />
      <Banner />
      <WorkPlanCards />
      <Stylishly />
      <Customers />
      <AdsBannerSlider/>
    </motion.div>
  );
};

export default HomePage;
