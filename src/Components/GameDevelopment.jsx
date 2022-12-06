

import React from 'react';

import "./Styles/gameDev.css";
import content from "./content";
import Slider from "./GameDevSlideShow"
import SidePanel from "./sideBar"
import GameDevRef from "./gameDevRef";
import GameDevHeading from "./gameDevHeading";
import GamePreviews from "./GamePreviews"

function GameDevelopment() {

  return (
      <div>

    <div className="gameDev-Container">

    <div className="gameDevBody">
      <GameDevHeading />
        <Slider/>
    <SidePanel />

      <div className="gameDevAboutRight">
       <p>{content[3].profile}</p>
        <p style={{marginBottom:"250px"}}>{content[3].about}</p>
      </div>
    </div>
      </div>


      <GameDevRef />
      <GamePreviews />
        </div>
  );
};

export default GameDevelopment;
