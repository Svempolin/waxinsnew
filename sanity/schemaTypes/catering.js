export default {
  name: "cateringPage",
  title: "Catering Page",
  type: "document",
  fields: [
    {
      name: "cateringTitle",
      title: "Title",
      type: "string",
      description: "The title for the Catering section",
    },
    {
      name: "cateringText",
      title: "Text",
      type: "blockContent", // För rich text content (glöm inte att inkludera blockContent-schemat)
      description: "The text content for the Catering section",
    },
    {
      name: "cateringImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Aktivera beskärning för bilder
      },
      description: "The image displayed in the Catering section",
    },
  ],
};
