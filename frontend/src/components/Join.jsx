import React, { useEffect, useState } from "react";
import client from "../sanityClient"; // Sanity-klient
import { PortableText } from "@portabletext/react";
import "../styles/app.scss";

const Join = () => {
  const [joinData, setJoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "joinSection"][0]{
            joinUsTitle,
            jobItems[]->{
              jobItemTitle,
              jobDescription,
              jobContactPerson
            }
          }
        `;
        const result = await client.fetch(query);
        setJoinData(result);
      } catch (error) {
        console.error("Error fetching Join data:", error);
      }
    };

    fetchData();
  }, []);

  if (!joinData || !joinData.jobItems) return <div>Loading...</div>;

  return (
    <section id="join-section">
      <div className="container">
        {/* Titel */}
        <div className="row text-center">
          <div
            className="column"
            data-sal="fade"
            data-sal-duration="800"
            data-sal-delay="300"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <h1>{joinData.joinUsTitle}</h1>
          </div>
        </div>

        {/* Jobbeskrivningar */}
        <div className="row">
          <div
            className="column column-text"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            {joinData.jobItems.map((job, index) => (
              <div className="job" key={index}>
                <h4>{job.jobItemTitle}</h4>
                <PortableText value={job.jobDescription} />
                <div>
                  <a
                    href={`mailto:${job.jobContactPerson}`}
                    className="button button-outline"
                  >
                    Apply Here
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
