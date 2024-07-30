
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import AboutBanner from './components/About/AboutBanner';
import Summary from './components/summary/Summary';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="">
      <Header/>
      <AboutBanner/>
      <Summary/>
      <Timeline/>
      <Contact />
      
      <Footer/>
    </div>
  );
}

export default App;
