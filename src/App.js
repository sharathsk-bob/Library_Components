
import { BrowserRouter, Route,Routes, Switch } from 'react-router-dom';
import Presentation from "../src/components/presentation/presentation"
import HeaderComponent from "../src/components/sub-components/header/header";
import ButtonComponent from "../src/components/sub-components/button/button";
import { AppProvider } from './components/sub-components/app-context';
import Cards from "./components/sub-components/cards/cards";
import './index.scss';
import Navbar from './components/sub-components/navbar/navbar';
import CardHtml from './components/sub-components/cards/card-html';
import CardHeader from './components/sub-components/cards/card-header';
import FooterComponent from "../src/components/sub-components/footer/footer";

function App() {
  return (
    <div className="App">
        <AppProvider>
          <Routes>
            
          <Route exact path="/"element ={<Presentation/>} ></Route>
          <Route exact path="header"element ={<HeaderComponent/>} ></Route>
          <Route exact path="cards"element ={<Cards/>} ></Route>
          <Route path="/button" element ={<ButtonComponent/>} ></Route>
          <Route exact path="navbar"element ={<Navbar/>} ></Route>
          <Route exact path="cardhtml"element ={<CardHtml/>} ></Route>
          <Route exact path="/cardheader"element ={<CardHeader/>} ></Route>
          <Route exact path="footer"element ={<FooterComponent/>} ></Route>
          
          </Routes>
        </AppProvider> 
    </div>
  );
}

export default App;
