import React, { useEffect, useState } from "react";
import client from "../sanityClient"; // Din Sanity-klient
import "../styles/app.scss"; // Din SCSS
import logoBlack from "../assets/logo.png"; // Din logga
import { PortableText } from "@portabletext/react";

const Contact = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "contactPage"][0]{
            contactTitle,
            contactInfo,
            mapImage{
              asset->{
                url
              }
            }
          }
        `;
        const result = await client.fetch(query);
        console.log("Fetched Contact Data:", result); // För debugging
        setContactData(result);
      } catch (error) {
        console.error("Error fetching Contact data:", error);
      }
    };

    fetchData();
  }, []);

  if (!contactData) return <div>Loading...</div>;

  return (
    <section id="contact">
      <div
        className="text-center"
        data-sal="fade"
        data-sal-duration="800"
        data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
      >
        <img className="contact__logo" src={logoBlack} alt="Logo" />
      </div>
      <div className="container mt">
        <div className="row">
          <div
            className="column column-text"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <h2>{contactData.contactTitle}</h2>
            <div className="contact__info">
              <PortableText value={contactData.contactInfo} />
            </div>
          </div>
          <div
            className="column column-large"
            data-sal="fade"
            data-sal-duration="800"
            data-sal-delay="300"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <img
              className="w-100"
              src={contactData.mapImage?.asset?.url || ""}
              alt="Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
