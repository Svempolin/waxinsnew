import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import "../styles/app.scss";

const Kitchen = () => {
  const [kitchenData, setKitchenData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "kitchen"][0]{
            kitchenTitle,
            kitchenText,
            kitchenImage{
              asset->{
                url
              }
            }
          }
        `;
        const result = await client.fetch(query);
        console.log("Fetched Kitchen Data:", result);
        setKitchenData(result);
      } catch (error) {
        console.error("Error fetching Kitchen data:", error);
      }
    };

    fetchData();
  }, []);

  if (!kitchenData) return <div>Loading...</div>;

  return (
    <section id="kitchen-section">
      <div className="container">
        <div className="row">
          <div
            className="column image-column"
            data-sal="fade"
            data-sal-duration="800"
            data-sal-delay="300"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <img
              className="responsive-image"
              src={urlFor(kitchenData.kitchenImage.asset.url)}
              alt={kitchenData.kitchenTitle || "Kitchen Image"}
            />
          </div>
          <div
            className="column text-column"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <h1 className="section-title">{kitchenData.kitchenTitle}</h1>
            <div className="section-text">
              <PortableText value={kitchenData.kitchenText} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
