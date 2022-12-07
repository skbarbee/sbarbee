import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import PortfolioHeader from './components/Header';
import AboutMe from './components/AboutMe'
import Technology from './components/Technology'
import Projects from './components/Projects'
import Navigation from './components/NavBar'

function App() {
  return (
<BrowserRouter>
<div>    

  <Navigation/>
 
  
  
  </div>
  </BrowserRouter>

  );
}

export default App;
