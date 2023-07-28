import React from "react";
import Banner from "../../Components/Banner";
import ContactSection from "../../Components/ContactSection";
import OurService from "../../Components/OurService";
import ReviewSection from "../../Components/ReviewSection";
import Service from "../../Components/Service";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <OurService />
      <ReviewSection />
      <ContactSection />
    </div>
  );
};

export default Home;
