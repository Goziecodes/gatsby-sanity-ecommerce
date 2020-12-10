import { GiSleevelessJacket as icon } from 'react-icons/gi';

export default {
  // computer name
  name: 'sleeveless',
  // visible title
  title: 'Sleeveless',
  type: 'document',
  icon,
  //   icon: () => 'lll',
  fields: [
    {
      name: 'name',
      title: 'sleeveless Shirt',
      type: 'string',
      description: 'Name of the sleeveless Shirt ',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the Shirt',
      validation: (Rule) => Rule.min(1000),
      //    Todo: Add custom input component
    },
  ],
};
