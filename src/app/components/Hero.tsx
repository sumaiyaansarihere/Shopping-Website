"use client";
import React from 'react'
import Slider from 'react-slick';
import Slide from "./Slide";
const Hero = () => {
   

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,

    };
    const slideData = [
      
        {
            id: 0,
            img: "/pexels-pnw-prod-8995985.jpg",
            title: "WHERE STYLE MEETS GRACE!",
            mainTitle: "MODEST ELEGANCE",
            price: "$28",
        },
        {
            id: 1,
            img: "/pexels-pnw-prod-8996018.jpg",
            title: "ELEVATE YOUR STYLE!",
            mainTitle: "ELEGANT ATTIRE",
            price: "$22",
        },
        {
            id: 2,
            img: "/pexels-rdne-4911570.jpg",
            title: "CHIC AND MODEST FOR EVERY OCCASION!",
            mainTitle: "TIMELESS MODESTY",
            price: "$15",
        },
    ]
    return <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((items) => (
                    <Slide key={items.id}
                    img={items.img}
                    title={items.title}
                    mainTitle={items.mainTitle}
                    price={items.price}
                    
                    />
                ))}
            </Slider>
        </div>
    </div>
   
};
export default Hero;
