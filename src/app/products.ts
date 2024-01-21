export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Laptop Acer Aspire 3',
    price: 15599.00,
    description: 'Sistema Operativo Windows 10 Home Pantalla HD de 15.6 Pulgadas WebCam HD Resolución 640 X 480 Hasta 9 horas de duración de bateria'
  },
  {
    id: 2,
    name: 'LAPTOP LENOVO IDEAPAD 14ADA05',
    price: 17299.00,
    description: 'Los procesadores portátiles AMD Ryzen 5 3500U con gráficos Radeon ofrecen un potente rendimiento para las tareas cotidianas Dopoundsy Audio ofrece un sonido cristalino la visualización FHD de 14 pulgadas y los biseles laterales estrechos te dan más área de visualización y menos desorden.'
  },
  {
    id: 3,
    name: 'Laptop Lenovo Flex 14" 2 en 1 FHD Touch',
    price: 24170.00,
    description: 'Laptop Lenovo Flex 14" 2 en 1 FHD Touch 12GB 256GB -Negro'
  }
];


