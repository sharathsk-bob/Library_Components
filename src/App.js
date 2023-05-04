
import { BrowserRouter, Route,Routes, Switch } from 'react-router-dom';
import Presentation from "../src/components/presentation/presentation"
import HeaderComponent from "../src/components/sub-components/header/header";
import ButtonComponent from "../src/components/sub-components/button/button";
import { AppProvider } from './components/sub-components/app-context';
import Cards from "./components/sub-components/cards/cards";
import './index.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Routes>
            
          <Route exact path="/"element ={<Presentation/>} ></Route>
          <Route exact path="header"element ={<HeaderComponent/>} ></Route>
          <Route exact path="cards"element ={<Cards/>} ></Route>
          <Route path="/button" element ={<ButtonComponent/>} ></Route>
          
          </Routes>
        </AppProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
