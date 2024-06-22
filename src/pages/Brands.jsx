const brands = [
  {
    id: 1,
    name: "Nike",
    image: "https://i.ibb.co/rdgw3RN/nike.png",
  },
  {
    id: 2,
    name: "Adidas",
    image: "https://i.ibb.co/W2GsFHK/addidas.png",
  },
  {
    id: 3,
    name: "Puma",
    image: "https://i.ibb.co/gTXKPhj/puma.png",
  },
  {
    id: 4,
    name: "Reebok",
    image: "https://i.ibb.co/JzhrXD6/reebok.png",
  },
  {
    id: 5,
    name: "Converse",
    image: "https://i.ibb.co/rdgw3RN/nike.png",
  },
  {
    id: 6,
    name: "Vans",
    image: "https://i.ibb.co/W2GsFHK/addidas.png",
  },
  {
    id: 7,
    name: "New Balance",
    image: "https://i.ibb.co/gTXKPhj/puma.png",
  },
  {
    id: 8,
    name: "Under Armour",
    image: "https://i.ibb.co/JzhrXD6/reebok.png",
  },
  {
    id: 9,
    name: "Skechers",
    image: "https://i.ibb.co/rdgw3RN/nike.png",
  },
  {
    id: 10,
    name: "ASICS",
    image: "https://i.ibb.co/W2GsFHK/addidas.png",
  },
  {
    id: 11,
    name: "Salomon",
    image: "https://i.ibb.co/gTXKPhj/puma.png",
  },
  {
    id: 12,
    name: "Merrell",
    image: "https://i.ibb.co/JzhrXD6/reebok.png",
  },
  {
    id: 13,
    name: "Brooks",
    image: "https://i.ibb.co/rdgw3RN/nike.png",
  },
  {
    id: 14,
    name: "Hoka One One",
    image: "https://i.ibb.co/W2GsFHK/addidas.png",
  },
  {
    id: 15,
    name: "Mizuno",
    image: "https://i.ibb.co/gTXKPhj/puma.png",
  },
  {
    id: 16,
    name: "Altra",
    image: "https://i.ibb.co/JzhrXD6/reebok.png",
  },
  {
    id: 17,
    name: "On",
    image: "https://i.ibb.co/rdgw3RN/nike.png",
  },
  {
    id: 18,
    name: "Topo Athletic",
    image: "https://i.ibb.co/W2GsFHK/addidas.png",
  },
  {
    id: 19,
    name: "Vivobarefoot",
    image: "https://i.ibb.co/gTXKPhj/puma.png",
  },
  {
    id: 20,
    name: "Xero Shoes",
    image: "https://i.ibb.co/JzhrXD6/reebok.png",
  },
  {
    id: 21,
    name: "Lems",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 22,
    name: "Luna Sandals",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 23,
    name: "Bedrock Sandals",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 24,
    name: "Earth Runners",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 25,
    name: "Unshoes",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 26,
    name: "Shamma Sandals",
    image: "https://via.placeholder.com/150",
  },
];

const Brands = () => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Brands</h1>

      <div className="grid grid-cols-6 gap-3">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-gray-100 p-4 rounded-lg">
            <img
              src={brand.image}
              alt={brand.name}
              className="h-32 w-32 object-cover mx-auto"
            />
            <p className="text-center">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
