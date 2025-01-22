export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "contactTitle",
      title: "Contact Title",
      type: "string",
      description: "Title for the contact section.",
    },
    {
      name: "contactInfo",
      title: "Contact Info",
      type: "blockContent", // För rich text-innehåll
      description: "Information for contacting the business.",
    },
    {
      name: "mapImage",
      title: "Map Image",
      type: "image",
      options: {
        hotspot: true, // För att beskära bilden
      },
      description: "Image of the map.",
    },
  ],
};
