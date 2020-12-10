import { RiShirtFill as icon } from 'react-icons/ri';
import PriceInput from '../components/PriceInput';

export default {
  // computer name
  name: 'shirts',
  // visible title
  title: 'Shirts',
  type: 'document',
  icon,
  //   icon: () => 'lll',
  fields: [
    {
      name: 'name',
      title: 'Shirt Name',
      type: 'string',
      description: 'Name of the Shirt ',
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
      inputComponent: PriceInput,
    },
    {
      name: 'design',
      title: 'Design',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'design' }] }],
    },
  ],

  //   adding custom preview, u can comment this part out to see the diff
  preview: {
    select: {
      title: 'name',
      media: 'image',
      design0: 'design.0.name',
      design1: 'design.1.name',
      design2: 'design.2.name',
      design3: 'design.3.name',
    },
    prepare: ({ title, media, ...designs }) => {
      // filter undefined designs
      //   ...designs rest operator from above is an object, and we use object.values to put its values into an array
      //   filter(boolean) returns false when design is undefined, Boolean(undefined) returns false, thus effectively filtering out undefined designs
      const myDesigns = Object.values(designs).filter(Boolean);
      //   2. return the preview object for the design
      return {
        title,
        media,
        subtitle: myDesigns.join(', '),
      };
    },
  },
};
