import React, { useEffect, useState } from 'react';
import client, { urlFor } from '../sanityClient';
import { PortableText } from '@portabletext/react';
import '../styles/app.scss';

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "restaurantPage"][0]{
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
        console.log("Fetched Data:", result); // För debugging
        setRestaurantData(result);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };

    fetchData();
  }, []);

  if (!restaurantData) return <div>Loading...</div>;

  return (
    <section id="restaurant-section">
      <div className="container">
        {/* Bildsektionen */}
        <div className="row">
          <div
            className="column"
            data-sal="fade"
            data-sal-duration="800"
            data-sal-delay="300"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <img
              src={urlFor(restaurantData?.restaurantImage?.asset?.url || 'https://via.placeholder.com/400')}
              alt={restaurantData?.restaurantTitle || 'Placeholder'}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Titel-sektionen */}
        <div className="row">
          <div
            className="column column-text"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <h1 className="mt">{restaurantData?.restaurantTitle}</h1>
          </div>
        </div>

        {/* Text-sektionen */}
        <div
          className="row"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
        >
          <div className="column column-text">
            <PortableText value={restaurantData?.restaurantText} />
          </div>

          {/* Meny-knappar */}
          <div className="column column-text">
            <a
              href={restaurantData?.restaurantMenu?.asset?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Menu
            </a>
            <a
              href={restaurantData?.dessertMenu?.asset?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Dessert
            </a>
            <a
              href={restaurantData?.wineMenu?.asset?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Wine List
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
