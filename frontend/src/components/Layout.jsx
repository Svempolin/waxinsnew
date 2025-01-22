import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/app.scss'
import VideoHeader from './videohero'
import About from "./About";
import Restaurant from "./ResturantCorrect";
import Bar from "./Bar";
import Catering from "./Catering";
import Imagegrid from "./Imagegrid";
import Kitchen from "./Kitchen";
import Join from "./Join";
import Contact from "./Contact";


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <VideoHeader />
      <About />
      <Restaurant />
      <Bar />
      <Catering />
      <Imagegrid />
      <Kitchen />
      <Join />
      <Contact />
      {/* <main>{children}</main> */}
      <Footer />
    </div>
  );
};

export default Layout;
