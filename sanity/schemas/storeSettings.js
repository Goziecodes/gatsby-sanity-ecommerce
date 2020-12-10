import { RiShirtFill as icon } from 'react-icons/ri';

export default {
  // computer name
  name: 'storeSettings',
  // visible title
  title: 'Settings',
  type: 'document',
  icon,
  //   icon: () => 'lll',
  fields: [
    {
      name: 'name',
      title: 'settings name',
      type: 'string',
      description: 'name of the setttings',
    },
    {
      name: 'customers',
      title: 'what our customers say',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'discount',
      title: 'Shirts with discount',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'shirts' }] }],
    },
  ],
};
