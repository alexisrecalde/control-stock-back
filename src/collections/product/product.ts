import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',

 
  access: {
    read: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
			name: 'name',
      type: 'text', 
      required: true,
      label: "Nombre"
		},
		{
			name: 'description',
      type: 'textarea', 
      required: true,
      label: "Descripcion"
    },
    {
			name: 'price',
      type: 'number', 
      required: true,
      label: "Precio"
    },
    {
			name: 'quantity',
      type: 'number', 
      required: true,
      label: "Cantidad"
		},
  ],
};

export default Products;