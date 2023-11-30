import '../styles/layouts/Home.scss';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <HomeBanner />
      </div>
    </>
  );
}

export default Home;
