export default {
  name: "kitchen",
  title: "Kitchen Section",
  type: "document",
  fields: [
    {
      name: "kitchenTitle",
      title: "Title",
      type: "string",
      description: "The title for the Kitchen section",
    },
    {
      name: "kitchenText",
      title: "Text",
      type: "blockContent", // Använd blockContent för stöd för rich text
      description: "The text content for the Kitchen section",
    },
    {
      name: "kitchenImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Gör det möjligt att beskära bilden
      },
      description: "The image for the Kitchen section",
    },
  ],
};
