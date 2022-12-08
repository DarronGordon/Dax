

import React from 'react';

import "./Styles/gameDev.scss";
import content from "./content";
import Slider from "./GameDevSlideShow"
import SidePanel from "./sideBar"
import GameDevRef from "./gameDevRef";
import GameDevHeading from "./gameDevHeading";
import GamePreviews from "./GamePreviews"

function GameDevelopment() {

  return (
      <div className='gameDevContainer'>

    <div className="gameDevHeader">
    <GameDevHeading />
    </div>

    <div className="gameDevBody">
    
        <Slider/>
    <SidePanel />
</div>

      {/* <div className="gameDevAbout">
       <p>{content[3].profile}</p>
        <p style={{marginBottom:"250px"}}>{content[3].about}</p>
      </div> */}
   
     

<div className='gameDevRef'>

<GameDevRef />
</div>

<div className='gameDevGames'>
<GamePreviews />
</div>
      
  </div>
  );
};

export default GameDevelopment;
