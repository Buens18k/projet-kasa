import React from 'react';
import Main from '../components/Main';
import HomeBanner from '../components/HomeBanner';
import Location from '../components/Location';
import data from '../../data.json';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  
  const house = data
  return { house };
}

function Home() {
  const { house } = useLoaderData();
  return (
      <Main>
        <HomeBanner />
        <Location data={house}/>
      </Main>
  );
}

export default Home;
