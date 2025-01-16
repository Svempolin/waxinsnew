export default {
  name: 'restaurantPage',
  type: 'document',
  title: 'Restaurant Page',
  fields: [
    {
      name: 'restaurantTitle',
      type: 'string',
      title: 'Restaurant Title',
    },
    {
      name: 'restaurantText',
      type: 'array',
      title: 'Restaurant Text',
      of: [{ type: 'block' }],
    },
    {
      name: 'restaurantImage',
      type: 'image',
      title: 'Restaurant Image',
    },
    {
      name: 'restaurantMenu',
      type: 'file',
      title: 'Restaurant Menu',
    },
    {
      name: 'dessertMenu',
      type: 'file',
      title: 'Dessert Menu',
    },
    {
      name: 'wineMenu',
      type: 'file',
      title: 'Wine Menu',
    },
  ],
};

