import { CollectionConfig } from "payload/types";

const Ventas: CollectionConfig = {
  slug: "ventas",
  

  access: {
    read: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
  
    {
    
  
      name: "orden", // required
      type: "array", // required
      label: "orden de venta",
      minRows: 1,
      //interfaceName: "CardSlider", // optional
      labels: {
        singular: "orden",
        plural: "ordenes",
        
      },
      fields: [
    {
			name: 'name',
      type: 'text', 
      required: true,
      label: "Nombre",
     
    },

    {
			name: 'supplier',
      type: 'textarea', 
      required: true,
      label: "Proveedor"
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
      admin: {
        components: {
          RowLabel: ({ data, index }) => {
            console.log(data);
            
            return data?.title || `Orden ${String(index).padStart(2, "0")}`;
          },
        },
      },
    },
  ],
};
export default Ventas;