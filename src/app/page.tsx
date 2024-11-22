
import React from 'react';
import  Image  from 'next';

import Hero from "./components/Hero"; 
import NewProducts from './components/NewProducts';
import Categories from './components/Categories';
import Abayas from './components/Abayas';
import Hijab from './components/Hijab';
import Deals from './components/Deals';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <NewProducts />
      <Categories />
      <Abayas />
      <Hijab/>
      <Deals />
  
    </main>
  );
}
