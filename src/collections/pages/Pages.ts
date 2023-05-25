import { CollectionConfig } from 'payload/types';

const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
			name: 'name',
      type: 'text', 
      required: true,
      label: "Nombre"
		},

  ],
};

export default Pages;