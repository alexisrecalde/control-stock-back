import { CollectionConfig } from "payload/types";

const Ventas: CollectionConfig = {
  slug: 'ventas',
  access: {
    read: () => true,
    delete: () => true,
    create: () => true,
    update: () => true,
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
			name: 'supplier',
      type: 'textarea', 
      required: false,
      label: "Proveedor"
    },
    {
			name: 'price',
      type: 'number', 
      required: true,
      label: "Precio Costo"
    },
    {
			name: 'salePrice',
      type: 'number', 
      required: true,
      label: "Precio Venta"
    },
    {
			name: 'quantity',
      type: 'number', 
      required: true,
      label: "Cantidad"
		},
  ],
};
export default Ventas;