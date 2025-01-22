import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient";
import "../styles/app.scss";

const Imagegrid = () => {
  const [imageGridData, setImageGridData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "imageGrid"][0]{
            title,
            images[]{
              asset->{
                url
              }
            }
          }
        `;
        const result = await client.fetch(query);
        console.log("Fetched Image Grid Data:", result); // För debugging
        setImageGridData(result);
      } catch (error) {
        console.error("Error fetching image grid data:", error);
      }
    };

    fetchData();
  }, []);

  if (!imageGridData) {
    return <div>Loading...</div>;
  }

  return (
    <section id="imagegrid-section">
      <div className="container container-fluid">
        <h1>{imageGridData.title}</h1>
        <div className="row">
          {imageGridData.images.map((image, index) => (
            <div
              className="column column-insta no-gutters"
              key={index}
              data-sal="fade"
              data-sal-duration="800"
              data-sal-delay={100 * index}
              data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
            >
              <img
                src={urlFor(image.asset.url)}
                alt={`Grid Item ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Imagegrid;
