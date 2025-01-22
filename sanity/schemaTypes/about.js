export default {
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    {
      name: "aboutTitle",
      title: "Title",
      type: "string",
      description: "The title for the About section",
    },
    {
      name: "aboutText",
      title: "Text",
      type: "blockContent", // Du behöver lägga till ett blockContent-schema för detta
   
      description: "The text content for the About section",
    },
    {
      name: "aboutImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Gör det möjligt att beskära bilder
      },
      description: "The image displayed in the About section",
    },
  ],
};
