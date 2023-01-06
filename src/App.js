//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import Hello from './component/Hello';
import Search from './component/Search';
import Header from './component/Header';
import Hero2 from './component/Hero2';
import Footer from './component/Footer';
import Section1 from './component/Section1';
import Hero from './component/Hero';
//import Ruff from './component/ruff';

function App() {
  return (
    <>
      <Header />
      <Search />
      <Hero2 />
      <Section1 />
      <Hero />
      <Footer />
      {/*<Ruff />*/}
    </>
  );
}

export default App;
