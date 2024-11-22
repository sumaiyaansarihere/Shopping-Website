
import React from 'react';
import HijabCard from './HijabCard';

interface ProductType {
    img: string;
    title: string;
    desc: string;
    ratings: number;
    price: number;
  }
  
  const HijabData: ProductType[] = [
    {
      img: "/2 hijab bundles.jpg",
      title: "2 Pack Hijab Bundle",
      desc:"Georgette Chiffon",
      ratings: 4,
      price: 40.00,
    },
    {
      img: "/9 geogette chiiffon hijab.jpg",
      title: "9 Pack Hijab Bundle",
      desc: "Georgette Chiffon",
      ratings: 5,
      price: 150.00,
    },
    {
      img: "/Lawn Crimp hijab 6 bundle.jpg",
      title: "6 Pack Hijab Bundle",
      desc: "Crimp Lawn",
      ratings: 5,
      price: 100.00,
    },
    {
      img: "/crinkle silk hijab 9 bundle.jpg",
      title: "9 Pack Hijab Bundle",
      desc: "Crinkle Silk",
      ratings: 5,
      price: 180.00,
    },
    {
      img: "/nude georgette chiffon hijab, pack of 6.jpg",
      title: "6 Pack Hijab Bundle",
      desc: "Georgette Chiffon",
      ratings: 4.2,
      price: 90.00,
    },
    {
      img: "/crinckle chiffon 5 bundle.jpg",
      title: "5 Pack Hijab Bundle",
      desc: "Crinkle Chiffon",
      ratings: 4,
      price: 130.00,
    },
    {
      img: "/turkish 10.jpg",
      title: "10 Pack Hijab Bundle",
      desc: "Turkish Lawn",
      ratings: 5,
      price: 210.00,
    },
    {
        img: "/crincle hijab 5 bundle.jpg",
        title: "5 Pack Hijab Bundle",
        desc: "front open abaya",
        ratings: 4,
        price: 130.00,
      },
      {
        img: "/Silk Hijabs 6 bundle.jpg",
        title: "6 Pack Hijab Bundle",
        desc: "Silk Hijab",
        ratings: 5,
        price: 125.00,
      },
      {
        img: "/pastel 2.jpg",
        title: "6 Pack Hijab Bundle", 
        desc: "Georgette Chiffon",
        ratings: 5,
        price: 90.00,
      },
    
    ]
const Hijab: React.FC = () => {
    return (
        <section id="hijab" className="hijab-container bg-rgb(225,228,196) py-16 px-6" >
      <div className="container pt-16">
      
        <h1 className="text-pink-500 outline-double w-full text-5x1 font-bold mb-4 text-center mt-9 text-5xl pb-5 text-size">Hijabs</h1>
        <p className='text-center text-lg font-extra-light text-gray-700 mb-12 pb-5'>"Redefining modest wear – discover the perfect hijab for every occasion."
            </p>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {HijabData.map((item, index) => (
            <HijabCard
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
  
  export default Hijab;
