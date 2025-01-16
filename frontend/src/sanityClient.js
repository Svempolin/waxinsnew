import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Konfigurera Sanity-klienten
const client = createClient({
  projectId: 'fz5xi0uj', // Byt ut mot ditt Sanity-projekt-ID
  dataset: 'production', // Byt ut mot ditt dataset
  apiVersion: '2023-01-01', // Anpassa version efter ditt behov
  useCdn: true, // Använd CDN för snabbare hämtning
});

// Funktion för att bygga bild-URL
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
