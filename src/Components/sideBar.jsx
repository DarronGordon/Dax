
import React from 'react';

import content from "./content";

import GDCV from "./Styles/Images/GDCV.pdf"

function SidePanel(){



    function CreateSkillBar(prop){
      let skillbarClass=[prop.skill,"skills"];
      skillbarClass=skillbarClass.join(" ");
      return <div class="skillbar ">
        <p>{prop.skill}</p>
        <div className={skillbarClass}>{prop.perc}</div>
      </div>
    }



    function CreateList(items){

      return <li> {items}</li>
    }

  return(
<div className="gameDevSidePanel">

<div className='skills'>

<h4>Skills</h4>
<ul>{content[1].gameDevSkills.map(CreateList)}</ul>
</div>

<hr />

<div className ="skillsBar">
<CreateSkillBar skill="Game-Mechanics" perc="90%" />
<CreateSkillBar skill="Level-Design" perc="65%" />
<CreateSkillBar skill="Source-Control" perc="25%" />
<CreateSkillBar skill="Sound" perc="10%" />
</div>

<hr />

<div className='gameDevLinks'>

<div className="itchlink">
<h4 ><a href="https://gigglytwigg.itch.io/">ITCH.IO</a></h4>
</div>

<div className="cvLink">
<h3><a href={GDCV} download>CV</a></h3>
</div>
</div>


</div>


);
}

export default SidePanel;
