
import React from 'react';
import DealsCard from './DealsCard';

interface ProductType {
    img: string;
    title: string;
    desc: string;
    ratings: number;
    price: number;
  }
  
  const DealsData: ProductType[] = [
    {
      img: "/Deal.jpg",
      title: "Deal 1",
      desc:"Pack Of 4",
      ratings: 4,
      price: 70.00,
    },
    {
      img: "/Deal 5.jpg",
      title: "Deal 2",
      desc: "Pack of 4",
      ratings: 5,
      price: 70.00,
    },
    {
      img: "/Deal 3.jpg",
      title: "Deal 3",
      desc: "Pack of 4",
      ratings: 4.5,
      price: 70.00,
    },
    {
      img: "/Deal 4.jpg",
      title: "Deal 4",
      desc: "Pack of 4",
      ratings: 4,
      price: 70.00,
    },
    {
      img: "/Deal 2.jpg",
      title: "Deal 5",
      desc: " Pack of 4",
      ratings: 4.2,
      price: 70.00,
    },
  
    ]
const Deals: React.FC = () => {
    return (
        <section id="deals" className="hijab-container bg-rgb(225,228,196) py-16 px-6" >
      <div className="container pt-16">
      
        <h1 className="text-pink-500 outline-double w-full text-5x1 font-bold mb-4 text-center mt-9 text-5xl pb-5 text-size">EXCLUSIVE HOT DEALS!!!</h1>
        <p className='text-center text-lg font-extra-light text-gray-700 mb-12 pb-5 '>"Don't miss out on our hot deals – exclusive offers designed just for you!"
                
            </p>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {DealsData.map((item, index) => (
            <DealsCard
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

      <footer className='text-center font-extralight text-xl'>
    <p>© 2024 Modest Wear | All Rights Reserved</p>
  </footer>
  
      </section>
    );
  };
  
  export default Deals;
