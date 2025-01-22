import React, { useEffect, useState } from 'react';
import client, { urlFor } from '../sanityClient';
import { PortableText } from '@portabletext/react';

const Bar = () => {
  const [barData, setBarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        *[_type == "bar"][0]{
          barTitle,
          barText,
          barImage{
            asset->{
              url
            }
          },
          wineMenu{
            asset->{
              url
            }
          },
          drinkMenu{
            asset->{
              url
            }
          }
        }
      `;

      try {
        const result = await client.fetch(query);
        console.log('Fetched Bar Data:', result); // Debugging
        setBarData(result);
      } catch (error) {
        console.error('Error fetching Bar data:', error);
      }
    };

    fetchData();
  }, []);

  if (!barData) return <div>Loading...</div>;

  return (
    <section id="bar-section">
      <div className="container">
        <div className="row">
          {/* Bildsektion */}
          <div
            className="column"
            data-sal="fade"
            data-sal-duration="800"
            data-sal-delay="300"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <img
              className="h-100"
              src={urlFor(barData?.barImage?.asset?.url)}
              alt={barData?.barTitle || 'Bar section'}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          {/* Textsektion */}
          <div
            className="column column-text"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <h1>{barData.barTitle}</h1>
            <PortableText value={barData.barText} />
            <a
              href={barData?.drinkMenu?.asset?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Drink List
            </a>
            <a
              href={barData?.wineMenu?.asset?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Wine Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bar;
