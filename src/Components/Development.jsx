import "./Styles/webDev.css";
import React from 'react';
import content from "./content";
import WebDevHeading from"./webDevHeading";
import WebDevIntro from "./WebDevIntro";
import WebDevSkill from "./WebDevSkill";
import WebDevProjects from "./WebDevProjects";
import WebDevPreviews from "./WebDevPreviews";
import WordCloud from "./wordCloud";

const Development = () => {

  return (

    <div className="devBody">
<WebDevHeading />
<WordCloud />
<WebDevIntro one="one" className="webDevIntro webDevIntroRight"/>

<h3 >Check out my states below!</h3>
<WebDevSkill />

<hr className="webDevHr"/>
<br/>
<h3>Have a look at the websites, features and apps I have worked on. </h3>

<WebDevPreviews />
    </div>
  );
};

export default Development;
