import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomeMain from './components/HomeMain';
import Footer from './components/Footer/Footer';
import Email from './components/Email';
import GoDaddyAiro from './components/GodaddyAiro';


function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/email" element={<Email />} />
          <Route path="/godaddyairo" element={<GoDaddyAiro />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
  
   <FontAwesomeIcon/>
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
