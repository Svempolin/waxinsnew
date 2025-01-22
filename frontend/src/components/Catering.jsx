import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import "../styles/app.scss";

const Catering = () => {
  const [cateringData, setCateringData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "cateringPage"][0]{
            cateringImage{
              asset->{
                url
              }
            },
            cateringTitle,
            cateringText
          }
        `;
        const result = await client.fetch(query);
        console.log("Fetched Catering Data:", result); // För debugging
        setCateringData(result);
      } catch (error) {
        console.error("Error fetching Catering data:", error);
      }
    };

    fetchData();
  }, []);

  if (!cateringData) return <div>Loading...</div>;

  return (
    <section id="catering-section">
      <div className="container">
        <div className="row">
          {/* Bildsektion */}
          <div
            className="column medium-order-2"
            data-sal="fade"
            data-sal-duration="800"
            data-sal-delay="300"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <img
              className="h-100"
              src={urlFor(cateringData?.cateringImage?.asset?.url)}
              alt={cateringData?.cateringTitle || "Catering"}
            />
          </div>

          {/* Textsektion */}
          <div
            className="column column-text medium-order-1"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <h1>{cateringData?.cateringTitle}</h1>
            <PortableText value={cateringData?.cateringText} />
            <a href="mailto:catering@waxins.com" className="button button-outline">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
