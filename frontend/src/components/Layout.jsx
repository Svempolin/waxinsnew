import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/app.scss'
import VideoHeader from './videohero'
import About from "./About";
import Restaurant from "./restaurant";


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <VideoHeader />
      <About />
      <Restaurant />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
