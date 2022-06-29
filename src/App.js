import React, { useState } from 'react';

import Header from '../src/components/Header';
import Categories from '../src/components/Categories';
import NewProducts from '../src/components/NewProducts';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Categories />
        <NewProducts />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
