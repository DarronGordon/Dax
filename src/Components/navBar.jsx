import  {useState} from 'react';

import "./Styles/navBar.css";

import CV from './CV';

function NavBar  ()  {
const toggleBtnClass="";
const path = window.location.pathname;
const pathname = path.replace(/[^a-zA-Z0-9 ]/g, '');
const imgClassNames=pathname+"img";
let isExpanded = false;
const[isNavExpanded, SetIsNavExpanded]= useState("main-navBod");
const[isNavExpandedMNI, SetIsNavExpandedMNI]= useState("main-navItem");
const[isNavExpandedMNIS, SetIsNavExpandedMNIS]= useState("main-navItems");

function ToggleHamburger(){

isExpanded =!isExpanded;
if(isExpanded==true)
{
  SetIsNavExpanded("mobile-nav ");
  SetIsNavExpandedMNI("mobile-navItem");
  SetIsNavExpandedMNIS("mobile-navItems");
}
else if(isExpanded==false)
{
  SetIsNavExpanded("main-navBod");
}
}

function ToggleHamburgerOff(){
isExpanded =false;
  SetIsNavExpanded("main-navBod");
  SetIsNavExpandedMNI("main-navItem");
  SetIsNavExpandedMNIS("main-navItems");
}
  return (
    <header class="main-header">
  <div><div className={imgClassNames} />
  <button id="toggle-button" className="toggle-button" onClick ={ ToggleHamburger}>
  <span className="toggle-buttonBar "/><span className="toggle-buttonBar "/><span className="toggle-buttonBar "/><a href="/"></a></button>
  </div><nav className={isNavExpanded}>
      <ul class={isNavExpandedMNIS} onClick ={ ToggleHamburgerOff}>
      <li class={isNavExpandedMNI}>
          <a href="/">Home</a>
      </li>
          <li class={isNavExpandedMNI}>
              <a href="Development">Web-Development</a>
          </li>
          <li class={isNavExpandedMNI}>
              <a href="GameDevelopment">Game-Development</a>
          </li>
          <li class={isNavExpandedMNI}>
              <a href="MartialArts">Martial-Arts</a>
          </li>          
          <li class={isNavExpandedMNI}>
              <a href="Contact">Contact</a>
          </li>
      </ul>
  </nav>
    </ header>
  );
};

export default NavBar;
