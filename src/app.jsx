import About from './components/about/about';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Jumbotron from './components/jumbotron/jumbotron';
import Pricing from './components/pricing/pricing';
import RecentProject from './components/recent_project/recent_project';
import Service from './components/service/service';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <RecentProject />
      <Service />
      <Jumbotron />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
