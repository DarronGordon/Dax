import React from 'react';

import profilePic from "./Styles/Images/Dax.png";

import "./Styles/HomeStyles.scss";

function Home() {
  const [theme, SetTheme] = React.useState("neutral homeContainer");

  function ChangeTheme() {
    if (theme === "neutral homeContainer") {
      SetTheme("hot homeContainer");
    } else if (theme === "hot homeContainer") {
      SetTheme("neutral homeContainer");
    }
  }

  return ( 
    <div className={theme}>

    <div className = "homeHeading">
    <h1 style = {{textAlign: "center"}}> Welcome To My WebSite! </h1>
     <div >

<div className='ThemeChangerContainer'>

<h3 className = "dltt" > Dont Like the Theme ? </h3>
    <button onClick = {ChangeTheme} className='themeButton' > Change Theme </button>

</div>


    <div class="homeIntro">
    <img class="profile_img" src={profilePic} alt = "A picture of Darron" />
    <h4> Hi i'm Darron.</h4>
   
    <p class = "introP" > Web & Software Developer, HVAC & BMS / BAC Specialist, Martial Artist. </p>
    <h5 style={{color:"green",fontSize:"1.5rem", margin:"2.5rem", width:"100vw",textAlign:"center"}}> Please have a look through my portfolio and have a look at the interactive site COMING SOON!.</h5>
    </div>

    <div className="Logo">
    <div className = "logo" >
    </div>

    <div className = "homecolContainer" >

    <div class = "homecol homeSkillsCardOne" >
    <h3 class = "text-center" >Game Development</h3>
   <p>Unity Game Development. From codeing to level design, mobile to PC. 2D and 3D game development.</p>
   </div>

   <div class = "homeSkillsCardTwo homecol">
   <h3 class = "text-center" > Web & Software Development. </h3>
   <p>Front & back end website development using the MERN stack and a wide range of tools and frameworks. </p>
     <p>Git & Git-Hub source control.</p>
   </div>
   
   <div class = "homeSkillsCardThree homecol" >
    <h3 class = "text-center" > Martial - Arts. </h3>
    <p> I am an avid martial artist with over a decade in martial arts training currently specializing in Brazilian Jiu-jitsu grappling.</p>
     </div>

     <div class = "homeSkillsCardFour homecol" >
    <h3 class = "text-center" > HVAC. </h3>
    <p> HVAC Specialist, specializing in building control and management systems.</p>
     </div>

      
  <h2> See specific page for more info. </h2>

     </div>
</div>
    </div>
</div>
    </div>

  );
};

export default Home;
