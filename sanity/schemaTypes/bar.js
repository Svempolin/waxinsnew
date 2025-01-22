export default {
  name: 'bar',
  title: 'Bar Section',
  type: 'document',
  fields: [
    {
      name: 'barTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'barText',
      title: 'Text',
      type: 'blockContent', // Du behöver skapa blockContent-schema
    },
    {
      name: 'barImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'wineMenu',
      title: 'Wine Menu',
      type: 'file',
    },
    {
      name: 'drinkMenu',
      title: 'Drink Menu',
      type: 'file',
    },
  ],
};
