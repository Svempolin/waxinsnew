import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section from"../components/Section"

const Home = () => {
  return (
    <div>
      
   

      <Section id="about" title="About Us" content="Lorem ipsum..." />
      <Section id="menu" title="Our Menu" content="Discover our delicious menu..." />
      <Section id="contact" title="Contact Us" content="Get in touch with us!" />
      <Footer />

    </div>
  )}

  export default Home;