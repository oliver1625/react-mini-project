import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';
import CardBlock from './Components/CardBlock';
import NavBarTop from './Components/NavBarTop';
import Hero from './Components/Hero';
import Top from './Components/Top';
import HelpBanner from './Components/HelpBanner';
import Review from './Components/Review';
import ProvideJob from './Components/ProvideJob';
import Footer from './Components/Footer';

function App() {
  return (
      <main className="">       
        <Top />
        <NavBarTop />
        <Hero />
        {/* <HelpBanner /> */}
        <Review />
        <ProvideJob />
        <Footer />
      </main>
  )
}
export default App;
