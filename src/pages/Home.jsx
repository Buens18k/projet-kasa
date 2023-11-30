import '../styles/layouts/Home.scss';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import Location from '../components/Location';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <HomeBanner />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default Home;
