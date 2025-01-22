import React, { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import client from "../sanityClient";

const DocHead = ({ title }) => {
  const [siteTitle, setSiteTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "siteMetadata"][0]{ title }`;
        const result = await client.fetch(query);
        setSiteTitle(result?.title || "Default Title");
      } catch (error) {
        console.error("Error fetching site metadata:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${title} - ${siteTitle}`}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default DocHead;
