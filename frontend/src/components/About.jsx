import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient";
import { PortableText } from "@portabletext/react";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        *[_type == "about"][0]{
          aboutTitle,
          aboutText,
          aboutImage{
            asset->{
              url
            }
          }
        }
      `;

      try {
        const result = await client.fetch(query);
        console.log("About Data:", result); // För debugging
        setAboutData(result);
      } catch (error) {
        console.error("Error fetching About data:", error);
      }
    };

    fetchData();
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <section>
      <div className="container" id="about-section">
        <div className="row">
          <div
            className="column column-text"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <h1>{aboutData.aboutTitle}</h1>
            <PortableText value={aboutData.aboutText} />
          </div>
          <div
            className="column"
            data-sal="fade"
            data-sal-duration="800"
            data-sal-delay="300"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <img
              className="h-100"
              src={urlFor(aboutData.aboutImage.asset.url)}
              alt={aboutData.aboutTitle || "About section"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
