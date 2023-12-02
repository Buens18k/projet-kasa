import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import AboutBanner from '../components/AboutBanner';

export default function About() {
  return (
    <>
      <Header />
      <Main>
        <AboutBanner />
      </Main>

      <Footer />
    </>
  );
}
