export default {
  name: "imageGrid",
  title: "Image Grid",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title for the image grid section",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // Gör det möjligt att beskära bilder
          },
        },
      ],
      description: "Array of images for the grid",
    },
  ],
};
