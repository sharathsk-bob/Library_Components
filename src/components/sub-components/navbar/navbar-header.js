import React, { useContext,useState } from 'react';
import { AppContext } from '../app-context';
import useModal from '../use-modal/use-modal';
import { useNavigate } from 'react-router-dom';
import EditNav from './edit-navbar';
import './navbar.scss';
import Navbar from './navbar';
import NavbarHtml from './navbar-html';

function NavbarHeader() {
    const { numMenus,
        menus,
        hasIcons,
        navtheme,
        setNumMenus,
        setMenus,
        setHasIcons,
        setNavTheme,
        navValues
        }=useContext(AppContext);
        const { open: openEditNavs, close: closeEditNavs, ModalWrapper: ModalWrapperEditNavs } = useModal();
      const history=useNavigate();
      const resetNav = () => {
        setNumMenus(0);
        setMenus([{ type: "basic", text: "" }]);
        setHasIcons();
        setNavTheme("");
      };
      const [activeTab, setActiveTab] = useState(1);

  return (
    <>
    <ModalWrapperEditNavs>
    <EditNav close={closeEditNavs} />
  </ModalWrapperEditNavs>
    <div className="card-component">
    <div className="card-left">
    <h1>Navbar</h1><span> Component</span> 
        </div> 
   
      <div>
      <button className="backToHome"  onClick={()=>{history("/");resetNav();}}>Back</button>
      <button className="edit-card" onClick={openEditNavs}>Edit</button>
      </div>
    </div>
    <Navbar navValues={navValues} />
    <div className="card-tabs">
  <button
    className={activeTab === 1 ? "active" : ""}
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    onClick={() => setActiveTab(0)}
  >
    TAB2
  </button>
</div>
<div className="card-content">
  {activeTab === 0 ? (
    ("")
  ) : (
    <NavbarHtml navValues={navValues} />
  )}
</div>
    </>
  )
}

export default NavbarHeader;