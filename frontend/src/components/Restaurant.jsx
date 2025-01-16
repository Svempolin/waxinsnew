import React, { useEffect, useState } from 'react';
// import imageUrlBuilder from '@sanity/image-url';
import { useSanityClient } from '@sanity/client';
import { PortableText } from '@portabletext/react';
import '../styles/app.scss';

// Konfigurera Sanity-klienten
const client = useSanityClient({
  projectId: 'fz5xi0uj', // Lägg in ditt Sanity-projekt-ID
  dataset: 'production', // Justera om du använder en annan dataset
  apiVersion: '2023-01-01', // Anpassa version efter ditt behov
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// Funktion för att bygga bild-URL
function urlFor(source) {
  return builder.image(source);
}

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    // Hämta data från Sanity
    const fetchData = async () => {
      const query = `
        *[_type == "homePage"][0]{
          restaurantImage{
            asset->{
              url
            }
          },
          restaurantTitle,
          restaurantText,
          wineMenu{
            asset->{
              url
            }
          },
          restaurantMenu{
            asset->{
              url
            }
          },
          dessertMenu{
            asset->{
              url
            }
          }
        }
      `;

      const result = await client.fetch(query);
      setRestaurantData(result);
    };

    fetchData();
  }, []);

  if (!restaurantData) return <div>Loading...</div>;

  return (
    <section id="restaurant-section">
      <div className="container">
        <div className="row">
          <div
            className="column"
            data-sal="fade"
            data-sal-duration="800"
            data-sal-delay="300"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <img
              src={urlFor(restaurantData.restaurantImage.asset.url)}
              alt="Restaurant"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <div className="row">
          <div
            className="column column-text"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <h1 className="mt">{restaurantData.restaurantTitle}</h1>
          </div>
        </div>
        <div
          className="row"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
        >
          <div className="column column-text">
            <PortableText value={restaurantData.restaurantText} />
          </div>
          <div className="column column-text">
            <a
              href={restaurantData.restaurantMenu.asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Menu
            </a>
            <a
              href={restaurantData.dessertMenu.asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Dessert
            </a>
            <a
              href={restaurantData.wineMenu.asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Wine list
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
