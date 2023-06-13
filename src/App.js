
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Presentation from "../src/components/presentation/presentation"
import HeaderComponent from "../src/components/sub-components/header/header";
import ButtonComponent from "../src/components/sub-components/button/button";
import TooltipComponent from './components/sub-components/tooltip/tooltip';
import { AppProvider } from './components/sub-components/app-context';
import Cards from "./components/sub-components/cards/cards";
import Navbar from './components/sub-components/navbar/navbar';
import CardHtml from './components/sub-components/cards/card-html';
import CardHeader from './components/sub-components/cards/card-header';
import NavbarHeader from './components/sub-components/navbar/navbar-header';
import FooterComponent from "../src/components/sub-components/footer/footer";
import AlertComponent from './components/sub-components/alert/alert';
import Toaster from './components/sub-components/toaster/toaster';
import FormPresentation from './components/presentation/formpresentation';
import InputComponent from "../src/components/sub-components/forms/inputtext/inputtext";
import TextAreaComponent from './components/sub-components/forms/textarea/textarea';
import DatePickerComponent from './components/sub-components/forms/datepicker/datepicker';
import CheckBoxComponent from './components/sub-components/forms/checkbox/checkbox';
import ProgressBar from './components/sub-components/forms/progress-bar/progress';
import SwitchControl from './components/sub-components/forms/switch-control/switch-control';
import RangeComponent from './components/sub-components/forms/range/range';
import SelectComponent from './components/sub-components/forms/select/select';
import FileComponent from "./components/sub-components/forms/file-select/file-select";
import TableComponent from './components/sub-components/table/table';
import DynamicTabs from './components/sub-components/dynamic tabs/dynamic-tabs';
import LoaderComponent from "./components/sub-components/loader/loader";
import LoginComponent from "../src/components/sub-components/login-signup/login"
import './index.scss';
function App() {
  return (
    <div className="App">
        <AppProvider>
          
          <Routes>
            
          <Route exact path="/"element ={<Presentation/>} ></Route>
          <Route exact path="/header"element ={<HeaderComponent/>} ></Route>
          <Route exact path="/cards"element ={<Cards/>} ></Route>
          <Route path="/button" element ={<ButtonComponent/>} ></Route>
          <Route path="/tooltip" element ={<TooltipComponent/>} ></Route>
          <Route path="/alert" element ={<AlertComponent/>} ></Route>
          <Route exact path="/navbar"element ={<Navbar/>} ></Route>
          <Route exact path="cardhtml"element ={<CardHtml/>} ></Route>
          <Route exact path="/cardheader"element ={<CardHeader/>} ></Route>
          <Route exact path="/navbarheader"element ={<NavbarHeader/>} ></Route>
          <Route exact path="/footer"element ={<FooterComponent/>} ></Route>
          <Route exact path="/toaster"element ={<Toaster/>} ></Route>
          <Route exact path="/formcomponents"element ={<FormPresentation/>} ></Route>
          <Route exact path="formcomponents/inputText"element ={<InputComponent/>} ></Route>
          <Route exact path="/formcomponents/textarea" element={<TextAreaComponent/>}></Route>
          <Route exact path="/formcomponents/datepicker" element={<DatePickerComponent/>}></Route>
          <Route exact path="/formcomponents/checkbox" element={<CheckBoxComponent/>}></Route>
          <Route exact path="/formcomponents/progress"element ={<ProgressBar/>} ></Route>
          <Route exact path="/formcomponents/switch"element ={<SwitchControl/>} ></Route>
          <Route exact path="/formcomponents/range"element ={<RangeComponent/>} ></Route>
          <Route exact path="/formcomponents/select"element ={<SelectComponent/>} ></Route>
          <Route exact path="/formcomponents/file"element ={<FileComponent/>} ></Route>
          <Route exact path="/table"element ={<TableComponent/>} ></Route>
          <Route exact path="/dynamictabs"element ={<DynamicTabs/>} ></Route>
          <Route exact path="/loader"element ={<LoaderComponent/>} ></Route>
          <Route exact path="/login"element ={<LoginComponent/>} ></Route>
          </Routes>
        </AppProvider> 
    </div>
  );
}

export default App;
