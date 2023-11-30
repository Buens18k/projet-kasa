import '../styles/layouts/Home.scss';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import Location from '../components/Location';

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <HomeBanner />
        <Location />
      </div>
    </>
  );
}

export default Home;
