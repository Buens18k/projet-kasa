import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import HomeBanner from '../components/HomeBanner';
import Location from '../components/Location';

function Home() {
  return (
    <>
      <Header />
      <Main>
        <HomeBanner />
        <Location />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
