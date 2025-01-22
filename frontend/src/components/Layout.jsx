import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import VideoHeader from './videohero'
import About from "./About";
import Restaurant from "./ResturantCorrect";
import Bar from "./Bar";
import Catering from "./Catering";
import Imagegrid from "./Imagegrid";
import Kitchen from "./Kitchen";
import Join from "./Join";
import Contact from "./Contact";
import { HelmetProvider } from "react-helmet-async";
import DocHead from "./Helmet";
import '../styles/app.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <HelmetProvider>
      <DocHead title="Home"/>
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
      </HelmetProvider>
    </div>
  );
};

export default Layout;
