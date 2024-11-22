import React from 'react';
import AbayasCard from './AbayasCard';


interface ProductType {
    img: string;
    title: string;
    desc: string;
    ratings: number;
    price: number;
  }
  
  const AbayasData: ProductType[] = [
    {
      img: "/Charcoal Chiffon gown.jpg",
      title: "Abaya",
      desc:"Chiffon Abaya",
      ratings: 4,
      price: 130.00
    },
    {
      img: "/Charcoal Grey Abaya.jpg",
      title: "Abaya",
      desc: "Charcoal Grey Abaya",
      ratings: 5,
      price: 150.00
    },
    {
      img: "/Dubai Style abaya.jpg",
      title: "Abaya",
      desc: "Dubai Style Abaya",
      ratings: 4.5,
      price: 160.00
    },
    {
      img: "/green-baggy-abaya.jpg",
      title: "Baggy Abaya",
      desc: "Green Baggy Abaya",
      ratings: 4,
      price: 120.00
    },
    {
      img: "/Umbrella Abaya.jpg",
      title: "Abaya",
      desc: " New Umbrella Abaya",
      ratings: 4.2,
      price: 120.00
    },
    {
      img: "/Plum embellished abaya.jpg",
      title: "Plum Abaya",
      desc: "Embellished Abaya",
      ratings: 4,
      price: 140.00
    },
    {
      img: "/Rigel Abaya.jpg",
      title: "Abaya",
      desc: "Rigel Abaya",
      ratings: 4,
      price: 125.00
    },
    {
        img: "/front open abaya .jpg",
        title: "Abaya",
        desc: "front open abaya",
        ratings: 4,
        price: 150.00
      },
      {
        img: "/pexels-qalanjos-fashions-online-abaya-store-673551486-17879732.jpg",
        title: "Gown Style Abaya",
        desc: "Tea Pink",
        ratings: 4.3,
        price: 125.00
      },
      {
        img: "/pexels-qalanjos-fashions-online-abaya-store-673551486-29273207.jpg",
        title: "Sea Green Abaya", 
        desc: "Abaya with belt",
        ratings: 4,
        price: 130.00
      },
      {
        img: "/pexels-qalanjos-fashions-online-abaya-store-673551486-29188569.jpg",
        title: "Brown Embroided Abaya", 
        desc: "front-open-Abaya ",
        ratings: 4.3,
        price: 145.00
      },
      {
        img: "/pexels-rdne-7249446.jpg",
        title: "Royal Red Abaya", 
        desc: "Red Butterfly Abaya",
        ratings: 4.3,
        price: 165.00
      },
                 
     {
        img: "/pexels-danangwicaksono-3272517.jpg",
        title: "Shiny Silk", 
        desc: "Pinkish Abaya",
        ratings: 3,
        price: 125.00
      },  
      {
        img: "/pexels-rdne-7249359.jpg",
        title: "Butterfly Abaya", 
        desc: "Black Butterfly Abaya",
        ratings: 4,
        price: 140.00
      }, 
    ]
const Abayas: React.FC = () => {
    return (
        <section id="abayas" className="abayas-container bg-rgb(225,228,196) py-16 px-6" >
      <div className="container pt-16">
      
        <h1 className="text-pink-500 outline-double w-full text-5x1 font-bold mb-4 text-center mt-9 text-5xl pb-5 text-size">Abayas</h1>
        <p className='text-center text-lg font-extra-light text-gray-700 mb-12 pb-5 '>
             "Discover our elegant abaya collection, blending timeless modesty with modern sophistication for every occasion"
            </p>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {AbayasData.map((item, index) => (
            <AbayasCard
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
      </section>
    );
  };
  
  export default Abayas;