import React from 'react';
import styled from 'styled-components'; // Säkerställ att detta är installerat
import client, { urlFor } from '../sanityClient'; // Importera klienten och URL-funktionen
import Logowhite from '../assets/logo_white.png';
import '../styles/app.scss';

// // Konfigurera Sanity-klienten
// const client = useSanityClient({
//   projectId: 'ditt-projekt-id', // Byt ut mot ditt Sanity-projekt-ID
//   dataset: 'production', // Byt ut om du använder en annan dataset
//   apiVersion: '2023-01-01', // Anpassa version om det behövs
//   useCdn: true,
// });

// const builder = imageUrlBuilder(client);

// // Funktion för att bygga bild-URL
// function urlFor(source) {
//   return builder.image(source);
// }

const BackgroundSection = ({ className }) => {
  const [imageData, setImageData] = React.useState(null);

  React.useEffect(() => {
    // Hämta data från Sanity
    const fetchData = async () => {
      const query = `
        *[_type == "homePage"][0]{
          heroImage{
            asset->{
              _id,
              url
            }
          }
        }
      `;

      try {
        const result = await client.fetch(query); // Använd klienten från sanityClient.js
        setImageData(result?.heroImage?.asset?.url); // Spara URL för bakgrundsbilden
      } catch (error) {
        console.error('Error fetching hero image:', error);
      }
    };

    fetchData();
  }, []);

  if (!imageData) return <div>Loading...</div>;

  return (
    <div className="container container-fluid hero-container">
      <div className="column no-gutters">
        <div
          className={className}
          style={{
            backgroundImage: `url(${imageData})`,
            backgroundColor: '#040e18',
          }}
        >
          <img className="logo" src={Logowhite} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  height: 100vh;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default StyledBackgroundSection;
