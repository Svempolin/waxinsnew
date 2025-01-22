export default {
  name: 'restaurantPage',
  title: 'Restaurant Page',
  type: 'document',
  fields: [
    {
      name: 'restaurantImage',
      title: 'Restaurant Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'restaurantTitle',
      title: 'Restaurant Title',
      type: 'string',
    },
    {
      name: 'restaurantText',
      title: 'Restaurant Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'wineMenu',
      title: 'Wine Menu',
      type: 'file',
    },
    {
      name: 'restaurantMenu',
      title: 'Restaurant Menu',
      type: 'file',
    },
    {
      name: 'dessertMenu',
      title: 'Dessert Menu',
      type: 'file',
    },
  ],
};
