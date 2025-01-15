import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/app.scss'
import VideoHeader from './videohero'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <VideoHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
