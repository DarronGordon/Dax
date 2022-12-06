import React from 'react';

import profilePic from "./Styles/Images/Dax.png";

import "./Styles/main.css";
function Home() {
  const [theme, SetTheme] = React.useState("neutral");

  function ChangeTheme() {
    if (theme === "neutral") {
      SetTheme("hot");
    } else if (theme === "hot") {
      SetTheme("neutral");
    }
  }

  return ( 
    <div className = {theme }>
    <div>
    <h1 style = {{textAlign: "center"}}> Welcome To My WebSite! </h1>
     <div >
    <h3 className = "dltt" > Dont Like the Theme ? </h3>
    <button onClick = {ChangeTheme} className = 'themeButton' > Change Theme </button>
    <div class="intro">
    <img class="profile_img" src={profilePic} alt = "A picture of Darron" / >
      <h4> Hi i'm Darron.</h4>
    <p class = "intro_sum" > Web & Software Developer, HVAC & BMS / BAC Specialist, Martial Artist. </p>
    </div>

    <div className="changable">
    <div className = "logo" >
    </div>
  <h2> See specific page for more info. </h2>
    < div class = " flex-container cols"  >


    <div class = "col-lg-3 col-sm-12 homecol" >
    <h3 class = "text-center" >Game Development</h3>
   <p>Unity Game Development. From codeing to level design, mobile to PC. 2D and 3D game development.</p>
   </div>

   <div class = "col-lg-3 col-sm-12 homecol">
   <h3 class = "text-center" > Web & Software Development. </h3>
   <p>Front & back end website development using the MERN stack and a wide range of tools and frameworks. </p>
     <p>Git & Git-Hub source control.</p>
   </div>
   
   <div class = "col-lg-3 col-sm-12 homecol" >
    <h3 class = "text-center" > Martial - Arts. </h3>
    <p> I am an avid martial artist with over a decade in martial arts training currently specialising in Brazilian Jiu jitsu grappling.</p>
     </div>
     </div>
</div>
    </div>
</div>
    </div>

  );
};

export default Home;
