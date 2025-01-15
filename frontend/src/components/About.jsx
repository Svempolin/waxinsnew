import React, { useEffect, useState } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  // Mock-fetch data för frontend-start
  useEffect(() => {
    const fetchData = async () => {
      // Här kan du använda Sanity's API senare
      const mockData = {
        aboutTitle: "About Us",
        aboutText: {
          json: "This is a placeholder text. Replace this with content from Sanity.",
        },
        aboutImage: "https://via.placeholder.com/600x400", // Mockad bild
      };
      setAboutData(mockData);
    };
    fetchData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

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
            <div>{aboutData.aboutText.json}</div>
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
              src={aboutData.aboutImage}
              alt="About section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
