
import React from "react" ;
import "./Styles/webDev.css";
function WebSkills(){
  return( <div className="webSkillTree ">

    <div className="webSkillBranch Language">
    <h4>Language</h4>
    <ul>
    <li>C#/.net</li>
    <li>JavaScript</li>
    <li>Python</li>
    </ul>
    </div>

    <div className=" webSkillBranch frontEndTree">
    <h4>Front-End</h4>
    <ul>
    <li>React.js</li>
    <li>html</li>
    <li>CSS/Sass</li>
    <li>FlexBox</li>
    <li>Bootstrap</li>
    </ul>
    </div>


    <div className=" webSkillBranch Backend">
    <h4>Backend</h4>
    <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>React.js</li>
    </ul>
    </div>


    <div className="webSkillBranch sourceControl">
    <h4>Source-Control</h4>
    <ul>
    <li>Git</li>
    <li>Git-Hub</li>
    <li>Git-Lab</li>
    <li>Source Tree</li>
    </ul>
    </div>

  </div>
);
}

export default WebSkills;
