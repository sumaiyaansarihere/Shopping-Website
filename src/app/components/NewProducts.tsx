import React from 'react';
import ProductCard from './ProductCard'; 
//Here I Defined a TypeScript type for product data
interface ProductType {
  img: string;
  title: string;
  desc: string;
  ratings: number;
  price: number;
}

const productsData: ProductType[] = [
  {
    img: "/pexels-qalanjos-fashions-online-abaya-store-673551486-17867867.jpg",
    title: "Abaya",
    desc: "Front Open Abaya",
    ratings: 4,
    price: 130.00
  },
  {
    img: "/pexels-khaliifah-hussein-1904370898-29429387.jpg",
    title: "Black Abaya",
    desc: "Abaya w Scarf",
    ratings: 5,
    price: 150.00
  },
  {
    img: "/pexels-pnw-prod-9218394.jpg",
    title: "Tea Pink Hijab",
    desc: "Turkish Hijab",
    ratings: 4.5,
    price: 25.00
  },
  {
    img: "/pexels-danangwicaksono-3272517.jpg",
    title: "Chiffon Abaya",
    desc: "Elegant Chiffon Abaya",
    ratings: 4,
    price: 120.00
  },
  {
    img: "/pexels-ilabappa-19537346.jpg",
    title: "Pinkish Hijab",
    desc: "Pink Turkish Hijab",
    ratings: 4.2,
    price: 20.00
  },
  {
    img: "/pexels-thirdman-8063363.jpg",
    title: "Cotton Hijab",
    desc: "Grey Hijab",
    ratings: 4.7,
    price: 25.00
  },
  {
    img: "/pexels-yousuf-yasser-9029-3841534.jpg",
    title: "Casual Hijab",
    desc: "White Hijab ",
    ratings: 4.3,
    price: 25.00
  }
];

const NewProducts: React.FC = () => {
  return (
    <div className="container pt-16  bg-bisque w-full px-6 py-16">
      <h2 className="font-bold text-pink-500 text-center w-full outline-double text-2xl mb-5 pb-4">New Products</h2>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {productsData.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            ratings={item.ratings}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;