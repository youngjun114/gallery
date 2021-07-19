import About from './components/about/about';
import Banner from './components/banner/banner';
import Header from './components/header/header';
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
    </>
  );
}

export default App;
