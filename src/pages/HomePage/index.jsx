// import React from 'react'

import AdvertList from '../../components/AdvertList';
import Hero from '../../components/Hero';
import PopularCategories from '../../components/PopularCategories';

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularCategories />
      <AdvertList />
    </main>
  );
}
