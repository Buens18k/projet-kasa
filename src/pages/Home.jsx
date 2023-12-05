import React from 'react';
import Main from '../components/Main';
import HomeBanner from '../components/HomeBanner';
import Location from '../components/Location';

function Home() {
  return (
    <>
      <Main>
        <HomeBanner />
        <Location />
      </Main>
    </>
  );
}

export default Home;
