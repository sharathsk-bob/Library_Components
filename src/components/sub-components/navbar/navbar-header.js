import React, { useContext,useState } from 'react';
import { AppContext } from '../app-context';
import useModal from '../use-modal/use-modal';
import { useNavigate } from 'react-router-dom';
import EditNav from './edit-navbar';
import './navbar.scss';
import Navbar from './navbar';
import NavbarHtml from './navbar-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";

export const CustomStyleNavbar = styled.div`
.Normal {
  background-color: #f1f4f8 !important;

  a  {
    color: var(--color-capgemini-blue) !important;
  }
 
  .navbar-toggler-icon {

     background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='black' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    
     }
  .navbar-icons {
    .icon {
      color: var(--color-capgemini-blue) !important;
    }
  }

  ul.navbar-nav li a:hover {
    text-decoration: none;
    background-color: var(--color-capgemini-blue);
    color: white !important;
    font-weight: 600;
  }
  ul.navbar-nav li a:focus {
    text-decoration: none;
    background-color: var(--color-capgemini-blue);
    color: white !important;
    font-weight: 600;
  }
  ul.dropdown-menu li a:hover {
    background-color: var(--color-capgemini-blue);
    color: white !important;
    font-weight: 600;
  }
  ul.dropdown-menu li a:focus {
    background-color: var(--color-capgemini-blue);
    color: white !important;
    font-weight: 600;
  }
}
.Dark {
  background-color: black !important;
  border-color: black !important;
  color: white !important;
 ul.navbar-nav li a:hover {
  text-decoration: none;
  background-color:  white;
  color:black;
  font-weight: 600;
}
ul.navbar-nav li a:focus {
  text-decoration: none;
  background-color:  white;
  color:black;
  font-weight: 600;
}
ul.dropdown-menu li a:hover {
  background-color:  white;
  color:black;
  font-weight: 600;
}
ul.dropdown-menu li a:focus {
  background-color:  white;
  color:black;
  font-weight: 600;
}

}
.cg1 {
 
  color: #ffff !important;
  .card__title {
    color: white !important;
  }
  .card__cta,
  .card__cta:hover {
    background-color: white !important;
    border-color: black !important;
    color: black !important;
  }

  ul.navbar-nav li a:hover {
    text-decoration: none;
    background-color:  white;
    color:var(--color-capgemini-blue);
    font-weight: 600;
  }
  ul.navbar-nav li a:focus {
    text-decoration: none;
    background-color:  white;
    color:var(--color-capgemini-blue);
    font-weight: 600;
  }
  ul.dropdown-menu li a:hover {
    background-color:  white;
    color:var(--color-capgemini-blue);
    font-weight: 600;
  }
  ul.dropdown-menu li a:focus {
    background-color:  white;
    color:var(--color-capgemini-blue);
    font-weight: 600;
  }
}
.cg2 {
  background-color: #2b0a3d !important;

  color: #ffff !important;
  .card__title {
    color: white !important;
  }
  .card__cta,
  .card__cta:hover {
    background-color: white !important;
    border-color: black !important;
    color: black !important;
  }

  ul.navbar-nav li a:hover {
    text-decoration: none;
    background-color:  white;
    color:#2b0a3d;
    font-weight: 600;
  }
  ul.navbar-nav li a:focus {
    text-decoration: none;
    background-color:  white;
    color:#2b0a3d;
    font-weight: 600;
  }
  ul.dropdown-menu li a:hover {
    background-color:  white;
    color:#2b0a3d;
    font-weight: 600;
  }
  ul.dropdown-menu li a:focus {
    background-color:  white;
    color:#2b0a3d;
    font-weight: 600;
  }
}
.card-component {
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.168627451);
  align-items: center;
  padding: 15px;
  .card-left {
    display: flex;
    align-items: center;
    h1 {
      font-size: 1.35rem;
      text-transform: uppercase;
      font-weight: 700;
      margin: 0;
      color: var(--color-capgemini-blue);
      margin-left: 10px !important;
    }
    span {
      font-size: 1.35rem;
      text-transform: uppercase;
      margin: 0;
      color: #333;
      margin-left: 10px !important;
    }
  }
}

.navbar {
  background: var(--color-capgemini-blue);
  display: flex;
  font-size: 1em;
  padding:  0em 0.5em;
  color: white;
  margin-top: -5px;
}
ul.navbar-nav {
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  align-items: flex-start;
}
ul.navbar-nav li {
  flex: 0 0 auto;
}
ul.navbar-nav li a {
  display: block;
  padding: 0.8rem 1rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  margin-left: 12px;
}
ul.dropdown-menu li a {
  color: black;
  font-size: 0.9em;
  text-decoration: none;
}
.hamburger-menu {
  display: none;
}
.mobile-portfolio {
  display: none;
}
ul.navbar-nav li a i {
  font-size: 1em;
  padding-right: 0.2em;
}
ul.navbar-nav li a span {
  font-size: 1em;
}
ul.dropdown-menu {
  padding: 0px;
  margin: 0px;
}
.profile-part-div {
  float: right;
}
.documents-section {
  margin-left: auto;
}
.srt {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute !important;
}
i.fa.fa-question-circle.fa-lg {
  font-size: 1.3em;
  padding-right: 0px;
}
i.fa.fa-sign-out.fa-lg {
  font-size: 1.2em;
}
.dropdown-menu {
  position: absolute;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.25rem;
}
.dropdown .menu-text::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
@media only screen and (max-width: 47.9em) {
  .navbar {
    margin-top: 0px;
    padding: 1em 0px;
  }
  ul.navbar-nav {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .dropdown-menu {
    background-color: transparent;
    border: none;
  }
  ul.dropdown-menu li a {
    color: white;
  }
  ul.navbar-nav li a {
    display: block;
    padding: 0.75rem 1rem 0.75rem;
  }
  ul.dropdown-menu li a:hover {
    background: white;
    color: #0070ad;
  }
  ul.dropdown-menu li a:focus {
    background: white;
    color: #0070ad;
  }
  .documents-section {
    margin-left: none;
    width: 100%;
  }
  .fa-lg {
    font-size: 1em !important;
    padding-right: 0.2em !important;
  }
  .srt {
    border: none;
    clip: none;
    height: auto;
    width: auto;
    margin: auto;
    padding: revert;
    overflow: hidden;
    position: relative !important;
  }
}

.navbar-component{
background-color: #ffff;
}

`;

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

      const [copied, setCopied] = useState(false);

      const copyToClipboard = () => {
          navigator.clipboard.writeText(CustomStyleNavbar.componentStyle.rules[0])
          .then(() => {
              setCopied(true);
              setTimeout(() => {
              setCopied(false);
              }, 2000);
          })
          .catch((error) => {
              console.error('Failed to copy to clipboard:', error);
          });
      };

  return (
    <>
    <ModalWrapperEditNavs>
    <EditNav close={closeEditNavs} />
  </ModalWrapperEditNavs>
  <div className="navbar-component">
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
    aria-label="HTML Page of NavBar Component"
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    aria-label="CSS Page of NavBar Component"
    onClick={() => setActiveTab(0)}
  >
    CSS
  </button>
</div>
<div className="card-content">
  {activeTab === 0 ? (
    <>
      <div className='clipboard-div'>
          <button className='clipboard-btn' aria-label="copy to clipboard button" onClick={copyToClipboard}>
              <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                  {copied ? ' Copied!' : ' Copy Code'}
              </i>
          </button>
      </div>
      <SyntaxHighlighter language="css" style={coy}>
        {CustomStyleNavbar.componentStyle.rules[0]}
      </SyntaxHighlighter>
    </>
   
  ) : (
    <NavbarHtml navValues={navValues} />
  )}
</div>
</div>
    </>
  )
}

export default NavbarHeader;