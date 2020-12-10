import { MdPerson as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'person',
  // visible title
  title: 'Clients',
  type: 'document',
  icon,
  //   icon: () => 'lll',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'description',
      title: 'description',
      type: 'text',
      description: 'what client has to say',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
